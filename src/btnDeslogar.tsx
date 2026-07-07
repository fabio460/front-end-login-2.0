
export default function BtnDeslogar() {
  const deslogar = () =>{
    localStorage.removeItem("token")
    window.location.reload()
  }  
  return (
    <button onClick={deslogar}>Deslogar</button>
  )
}
