from bbdd import conexionRedis
from flask import Blueprint, jsonify #blueprint para crear el objeto de rutas(porque permite modular la app) y jsonify para convertidos objetos a json
import random


enrutador= Blueprint('rutas', __name__)


#conexion a redis
db=conexionRedis()


# @enrutador.route('/')
# def ppal():
#     return 'Hola'

#INICIALIZAR BBDD
@enrutador.route('/inicializar/<cantTickets>')
def inicializar(cantTickets):

    #resetamos la bbdd
    db.flushdb()

    #lista de precios
    precios=[500,1000,1200,2000]

    #como va a estar formado un ticket:
    #nrodeticket=[nrodeticket,precio,estado]

    for i in range( int(cantTickets) ):
        #inserto el ticket, x defecto son disponibles
        db.rpush(i+1,i+1,random.choice(precios),'disponible')

    return jsonify('Base de datos inicializada con '+cantTickets+' tickets.')


#LISTAR DISPONIBLES

@enrutador.route('/listar/disponibles')
def listarDisponibles():
    #traigo la cantidad de los que tienen ttl
    cantTemporales=db.info('keyspace')['db1']['expires']

    #para saber canTickets real tengo que restar los temporales que se agregan a la db
    cantTickets = db.dbsize()-cantTemporales

    ticketsDisponibles=[]

    #pregunto por cada indice de ticket si esta realmente disponible
    for i in range(cantTickets):

        ticketActual=db.lrange(i+1,0,-1) #trae el ticket completo

        #el ticketActual no tiene estado disponible,si esta vendido,en reserva sigue siendo disponible
        #si lo reservo se guarda ej:1reservado(como clave) y su ttl(valor)
        #ttl -2 es que no existe la llave
        if ticketActual[2]=='disponible' and db.ttl(str(i+1)+'reservado')==-2:
            ticketsDisponibles.append(ticketActual)
    
    return jsonify(ticketsDisponibles)



#LISTAR COMPRADOS

#solo los que en el campo del estado(2) tengan comprado
@enrutador.route('/listar/comprados')
def listarComprados():
    #traigo la cantidad de los que tienen ttl
    cantTemporales=db.info('keyspace')['db1']['expires']

    #para saber canTickets real tengo que restar los temporales que se agregan a la db
    cantTickets = db.dbsize()-cantTemporales

    ticketsComprados=[]

    #pregunto por cada indice de ticket si esta comprado
    for i in range(cantTickets):

        ticketActual=db.lrange(i+1,0,-1) #trae el ticket completo
        if ticketActual[2]=='comprado':
            ticketsComprados.append(ticketActual)
    
    return jsonify(ticketsComprados)




#LISTAR RESERVADOS

#los que tienen ttl, me fijo por cada nro que existe de ticket si existe ej: '1reservado'
@enrutador.route('/listar/reservados')
def listarReservados():
    #traigo la cantidad de los que tienen ttl
    cantTemporales=db.info('keyspace')['db1']['expires']

    #para saber canTickets real tengo que restar los temporales que se agregan a la db
    cantTickets = db.dbsize()-cantTemporales

    ticketsReservados=[]

    #pregunto por cada indice de ticket si tiene una clave nro+reservado
    for i in range(cantTickets):
        
        #me traigo el tiempo restante de la clave 'nroTicket+reservado':
        tiempoRestante=db.ttl(str(i+1)+'reservado')

        #si su tiempo es distinto a -2, es porque tiene ttl
        if tiempoRestante != -2:

            #formato del ticket reservado: [nroTicket,tiempoQueResta (en minutos con 2 decimales)]
            ticketsReservados.append([i+1, round(tiempoRestante/60,2)])

    
    return jsonify(ticketsReservados)





#RESERVAR TICKET
@enrutador.route('/reservar/<nroTicket>')
def reservarTicket(nroTicket):
    #agrega a db1 una clave con su tiempo de caducidad
    db.setex(nroTicket+'reservado',240,nroTicket)

    return jsonify('Ticket '+nroTicket+ ' reservado por 4 minutos')


#COMPRAR TICKET
#para comprarlo primero tengo que reservarlo, asi que si voy a comprar tengo que borrar la clave temporal
#y del ticket original cambiar su estado
@enrutador.route('/comprar/<nroTicket>')
def comprarTicket(nroTicket):
    db.delete(nroTicket+'reservado')
    db.lset(nroTicket,2,'comprado')
    
    return jsonify('Se compro el ticket '+nroTicket)

