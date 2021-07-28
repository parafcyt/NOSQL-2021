FROM python

WORKDIR /agente 

RUN pip install requests flask pymongo

COPY main.py ./agente.py

CMD ["python", "agente.py"]