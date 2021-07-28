import pymongo
import time
from requests import Request, Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects

#para pasar la respuesta a json
import json

url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'

apiKEY='9a8b77a9-31a6-45e7-bc9e-e5ab0b03ebe2'

# Traer los datos de la api
def traerDatos():

    parameters = {
        'start':'1',
        'limit':'5000',
        'convert':'USD'
    }

    headers = {
        'Accepts': 'application/json',
        'X-CMC_PRO_API_KEY': apiKEY
    }

    session = Session()
    session.headers.update(headers)

    try:
        response = session.get(url, params=parameters)
        datos = json.loads(response.text)
        
        return datos

    except (ConnectionError, Timeout, TooManyRedirects) as e:
        print(e)

        return None



#PARA CONECTARME CON MONGO
def conexionAmongo():

    cliente = pymongo.MongoClient('mongodb://bd-crypto-mongo:27017/')

    return cliente.bbddMongo # Nombre de la base de datos: bbddMongo



def guardarEnBBDD(db: pymongo.database.Database, datos):

    # Nombre de la coleccion: cryptoColeccion
    #guardo de a un documento
    db.cryptoColeccion.insert_one(datos)



# SI EL ARCHIVO QUE SE EJECUTA ES EL PPAL:

if __name__ == "__main__":

    while True: #ciclo infinito

        db = conexionAmongo()

        respuesta = traerDatos()

        if respuesta:

            print("Guardando informacion en bbdd: bd-crypto-mongo,", time.strftime("%c"))

            db.cryptoColeccion.delete_many({})

            for dato in respuesta['data']:

                guardarEnBBDD(db, dato)
        
        else:
            print("Error en API coinmarketcap,", time.strftime("%c"))

        time.sleep(240) #4minutos