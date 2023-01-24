const cors=require("cors")
const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const port=8080
const app=express()
app.use(cors())
app.use(bodyParser.json())
const {Schema}=mongoose
const notarySchema= new Schema(
    {imgurl:{type:String, required:true}},
    {
        name:{type:String, required:true}
    },
    {
        job:{type:String, required:true}
    },
  {
    about:{type:String, required:true}
  },
  {timestamp:true}
)
const Notary=mongoose.model("notaryrow",notarySchema)


//get

app.get("/notaryrow", (req,res)=>{
    Notary.find({},(error,docs)=>{
        if(!error){
            res.send(docs)
        }else{
            res.status(500).json({message:error})
        }
    })
})

app.delete("/notaryrow/:id", (req, res) => {
    const { id } = req.params
    Notary.findByIdAndDelete(id, (error) => {
        if(!error){
            res.send("Delete")
        }else {
            res.status(404).json({ message: error})
        }
    })
})

//post

app.post("/notaryrow", (req,res)=>{
 let notorpost= new Notary({
imgurl:req.body.imgurl,
name:req.body.name,
job:req.body.obj,
about:req.body.about
 })

 notorpost.save()
 res.send({messege:"succes"})
})


mongoose.set("strictQuery", false)
mongoose.connect(
    `mongodb+srv://sahar:sssaaa111@cluster0.opkcbok.mongodb.net/?retryWrites=true&w=majority`,
    (error)=>{
if(!error){
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
}
    }
)