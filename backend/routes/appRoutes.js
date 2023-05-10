import {
    addNewPerson,
    deletePerson,
    getPeople,
    getPersonWithID,
    updatePerson

} from '../controllers/appControllers';

const routes = (app) => {
    app.route('/person')
        // GET endpoint
        .get(getPeople)
        //POST endpoint
        .post(addNewPerson);

    app.route('/person/:personId')
        //get specific person
        .get(getPersonWithID)
        //update a specific person
        .put(updatePerson)
        //remove a specific person
        .delete(deletePerson);
}

export default routes;