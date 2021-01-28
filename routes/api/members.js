const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');

// Get all members
router.get('/', (req, res) => res.json(members));

// Get Single members
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id == req.params.id);

    if(found){
        res.json(members.filter(members => members.id == req.params.id));
    }else{
        res.status(400).json({
            msg: `User not found with this id ${req.params.id}`
        });
    }  
});

// Create Member
router.post('/' , (req, res) => {
   const newMember  = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        age: parseInt(req.body.age) 
   }

   if(!newMember.name || !newMember.email || !newMember.age){
    return res.status(400).json({ msg: 'Please enter the information right'})
}
members.push(newMember);
// res.json(members);
res.redirect('/')
});

// Update Member
router.put('/:id', (req, res) => {

    const found = members.some(member => member.id == req.params.id);

    if(found){
        const updateMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = updateMember.name ? updateMember.name : member.name;
                member.email = updateMember.email ? updateMember.email : member.email;
                member.age = updateMember.age ? updateMember.age : member.age;

                res.json({ msg: 'Member Update', member});
            }
        });
    }else{
        res.status(400).json({
            msg: `User not found with this id ${req.params.id}`
        });
    }
});

// Delete Members
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id == req.params.id);
    if(found){
        res.json( {msg: 'Member Deleted' , members : members.filter(members => members.id !== parseInt(req.params.id))});
    }else{
        res.status(400).json({
            msg: `User not found with this id ${req.params.id}`
        });
    }
});

module.exports = router;
