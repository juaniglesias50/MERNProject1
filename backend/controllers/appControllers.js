import mongoose from "mongoose";
import { dataSchema } from '../models/appModel';

const person = mongoose.model('person', dataSchema);

export const addNewPerson = (req, res) => {
    let newPerson = new person(req.body)

    //DEPRECATED
    newPerson.save((err, person) => {
        if (err) {
            res.send(err);
        }
        res.json(person);
    })

}

export const getPeople = (req, res) => {

    //DEPRECATED
    person.find({}, (err, person) => {
        if (err) {
            res.send(err);
        }
        res.json(person);
    })
}

export const getPersonWithID = (req, res) => {

    //DEPRECATED
    person.findById(req.params.personId, (err, person) => {
        if (err) {
            res.send(err);
        }
        res.json(person);

    }
    );
}

export const updatePerson = (req, res) => {

    //DEPRECATED
    person.findOneAndUpdate({ _id: req.params.personId }, req.body, { new: true }, (err, person) => {
        if (err) {
            res.send(err);
        }
        res.json(person);

    }
    );
}

export const deletePerson = (req, res) => {

    //DEPRECATED
    person.remove({ _id: req.params.personId }, (err, person) => {
        if (err) {
            res.send(err);
        }
        res.send('Person deleted');

    }
    );
}