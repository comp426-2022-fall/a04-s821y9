#!/usr/bin/env node
import { roll } from './lib/roll.js';
import express from 'express';
import minimist from 'minimist';

const app = express();
const args = minimist(process.argv.slice(2));

const port = args.port || 5000;


const sides = 6;
const dice = 2;
const rolls = 1;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/app/', (req, res) => {
  res.status(200).send('200 OK');
});

app.get('/app/roll/', (req, res) => {
  res.status(200).send(roll(sides, dice, rolls)));
});




app.get('/app/roll/:sides/', (req, res) => {
  let sides = parseInt(req.params.sides)
  res.status(200).send(roll(sides, dice, rolls));
});

app.get('/app/roll/:sides/:dice/', (req, res) => {
  let sides = parseInt(req.params.sides)
  let dice = parseInt(req.params.dice)
  res.status(200).send(roll(sides, dice, rolls));
});

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
  let sides = parseInt(req.params.sides)
  let dice = parseInt(req.params.dice)
  let rolls = parseInt(req.params.rolls)
  res.status(200).send(roll(sides, dice, rolls));
});

app.get('*', (req, res) => {
  res.status(404).send('404 NOT FOUND');
});

app.listen(port, () => {
  console.log(port);
});
