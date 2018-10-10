var db = require("../model/burgers.js");
var express = require("express");
var router = express.Router();

router.get("/", (req,res) => {
    try {
        res.render("index");
    } catch (error) {
        console.log(error);
        res.send({"error": error.message});
    }
});
router.get("/allburgers", (req,res) => {
    try {
        db.findAll().then(data => {
           return res.json(data);
        });
    } catch (error) {
        console.log(error);
        res.send({"error": error.message});
    }
});
router.post("/newburger", (req,res) => {
    try {
        db.create({
            burger_name: req.body.name,
            devoured: false
        }).then(data => { return res.json(data)}).catch( err => {
            console.log(err.message);
            res.send({"error":err.message});
        });
    } catch (error) {
        console.log(error);
        res.send({"error": error.message});
    }
});
router.put("/burger/:id", (req,res) => {
    try {
        db.put({devoured: req.body.dev},{
            where: {id:req.params.id}
        }).then(data => { return res.json(data)}).catch(err => {
            console.log(err.message);
            res.send({"error":err.message});
        });
    } catch (error) {
        console.log(error);
        res.send({"error": error.message});
    }
});
router.delete("/burger/:id", (req,res) => {
    try {
        if (req.params.id < 4){
            return res.send({"error":"You cannot delete original burgers"});
        }
        db.destroy({where:{id:req.params.id}}).then(data => { return res.json(data)}).catch(err => {console.log(err.message);res.send({"error":err.message});});
    } catch (error) {
        console.log(error);
        res.send({"error": error.message});
    }
});

module.exports = router;