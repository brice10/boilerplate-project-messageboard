#!/bin/sh

sudo PORT=3010 NODE_ENV='test' MONGO_URI='mongodb+srv://arleonzemtsop:TkTrNXFDKbGaIaIT@cluster0.m9gz16i.mongodb.net/?retryWrites=true&w=majority' docker-compose up -d --build
