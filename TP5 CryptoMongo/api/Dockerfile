FROM python

WORKDIR /api

ENV FLASK_APP api.py

RUN pip install flask pymongo flask-cors

COPY main.py ./api.py

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]
