from logging import log
import requests
import pymongo
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
cors=CORS(app,resources={r"/*": {"origins":"*"}})



def traerDeMongo():
    cliente = pymongo.MongoClient('mongodb://mongotp6:27017/')

    return cliente.avengerspelis

db=traerDeMongo()

#VA A IR URL1+IDPELICULA+URL2
API_URL1 = 'https://api.themoviedb.org/3/movie/'
API_URL2 = '?api_key=dfe3234b957f307e6e0db40c7052c2db&language=es'

#RUTAS + CONTROLADORES

#INICIALIZAR
@app.route('/inicializar', methods=['GET'])
def inicializar():
    #peliculas es la coleccion, borro todos los documentos de la coleccion
    db.peliculas.delete_many({})

    #algunos ids de pelis
    peliculasID = ['1771', '1726', '1724', '10138', '10195', '24428']

    #recorro las pelis y las guardo en la coleccion
    for pelicula in peliculasID:

        respuesta=requests.get(API_URL1+pelicula+API_URL2)

        db.peliculas.insert_one(respuesta.json())
    return jsonify('Se cargaron: '+str(db.peliculas.count_documents({}))+' peliculas.')

#LISTAR PELICULAS
@app.route('/listarpeliculas', methods=['GET'])
def listarPeliculas():
    peliculas=[]

    for pelicula in db.peliculas.find({}):

        #saco el id porque es un objeto y no se pueden guardar en json
        pelicula.pop('_id')
        peliculas.append(pelicula)
    
    return jsonify(peliculas)


#CARGAR PELICULA
@app.route('/cargarpelicula/<id>', methods = ['GET'])
def cargarPelicula(id):
    respuesta= requests.get(API_URL1 + id + API_URL2)
    print(respuesta)

    db.peliculas.insert_one(respuesta.json())

    return jsonify ("Pelicula cargada")


#MODIFICAR PELICULA
@app.route('/modificarpelicula', methods = ['PUT'])
def modificarPelicula():
    pelicula=request.get_json()

    db.peliculas.replace_one({'id':pelicula['id']},pelicula) #donde el id sea =al paso reemplazo con parametro

    return jsonify("Pelicula modificada")



#ELIMINAR PELICULA
@app.route('/eliminarpelicula/<id>',methods = ['DELETE'])
def eliminarpelicula(id):
    db.peliculas.delete_one({'id':int(id)})

    return jsonify("Pelicula Eliminada")




