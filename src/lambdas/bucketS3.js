//=================== METADATA BUCKET =================
module.exports.config = (event, context) => {
    console.log(JSON.stringify(event));
    console.log(JSON.stringify(context));
    console.log(JSON.stringify(process.env));
  };
  //=================== FIN METADATA BUCKET =================