import { useState ,useMemo} from "react"

const Calculation = () => {
      //useMemo sert a memoriser un calcul,l execution d une fonction et donc sont resultat
      const [temperature, setTemperature]= useState("")
       
            // cette function permet de calculer les degree celcius en degres fahrenheit
            function celsiusToFahrenheit(degree){
                return  degree * 1.8 + 32 
            }

      const expensesiveCalculations =  useMemo(()=>{console.log("render");
          return celsiusToFahrenheit(temperature)},[temperature] )

   

  return (
    <div>
        <input type="number" value={temperature} onChange={(e)=>setTemperature(e.target.value)} />
             <h1>valeur de {temperature} en fahrenheit : {expensesiveCalculations}</h1>
    </div>
  )
}
export default Calculation