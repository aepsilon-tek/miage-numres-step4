-- Question 1 :
Insert into Question (id, label)
values (1, 'Quel est le pays le plus grand consommateur de café par habitant ?');

Insert into Proposal (id, label, correct, QUESTION_ID)
values (1, 'Brésil', 0, 1);
Insert into Proposal (id, label, correct, QUESTION_ID)
values (2, 'Colombie', 0, 1);
Insert into Proposal (id, label, correct, QUESTION_ID)
values (3, 'États-Unis', 0, 1);
Insert into Proposal (id, label, correct, QUESTION_ID)
values (4, 'Finlande', 1, 1);

-- Question 2 :
Insert into Question (id, label)
values (2, 'Quel animal est le plus dangereux pour l’Homme ?');

Insert into Proposal (id, label, correct, QUESTION_ID)
values (5, 'Requin', 0, 2);
Insert into Proposal (id, label, correct, QUESTION_ID)
values (6, 'Lion', 0, 2);
Insert into Proposal (id, label, correct, QUESTION_ID)
values (7, 'Moustique', 1, 2);
Insert into Proposal (id, label, correct, QUESTION_ID)
values (8, 'Crocodile', 0, 2);

-- Question 3 :
Insert into Question (id, label)
values (3, 'Quel animal est la couleur du cheval blanc d’Henri IV ?');

Insert into Proposal (id, label, correct, QUESTION_ID)
values (9, 'Rouge', 0, 3);
Insert into Proposal (id, label, correct, QUESTION_ID)
values (10, 'Blanc', 1, 3);
Insert into Proposal (id, label, correct, QUESTION_ID)
values (11, 'Mauve', 0, 3);
Insert into Proposal (id, label, correct, QUESTION_ID)
values (12, 'Noir', 0, 3);