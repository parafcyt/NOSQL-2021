from flask import Flask
from flask_cors import CORS

#importo enrutador
from rutas import enrutador

#importo conexion a redis
from bbdd import conexionRedis


app= Flask(__name__)

cors=CORS(app, resources={r"/*": {"origins": "*"}}) #el "*" es que se acepta peticiones de cualquier origen


app.register_blueprint(enrutador)



#pregunto si lo que se ejecuta si este archivo es el main(principal)
if __name__=="__main__":
    #para que escuche los cambios:debug=True
    app.run( debug=True)