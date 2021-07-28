from flask import Flask, jsonify
from flask_cors import CORS
import pymongo

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

def conexionBBDD():

    cliente = pymongo.MongoClient('mongodb://bd-crypto-mongo:27017/') #uso el alias bd-crypto-mongo

    return cliente.bbddMongo # Nombre de la base de datos: bbddMongo


#RUTA Y CONTROLADOR

@app.route('/cryptomonedas/<limiteDocumentos>', methods=['GET'])
def traerDeMongo(limiteDocumentos):

    db = conexionBBDD()

    respuestas = []

    for dato in db.cryptoColeccion.find().limit(int(limiteDocumentos)):

        dato.pop('_id') #elimino el id porque no puedo hacer el JSON con un objeto
        respuestas.append(dato)
    
    return jsonify(respuestas)