import { Widget } from "./components/Widget";

export function App() {
  return <Widget />
}
//   const jogadores = [
//     {
//       nome: 'joão1',
//       type: 'suport',
//       esquad: 1,

//     },
//     {
//       nome: 'joão2',
//       type: 'suport',
//       esquad: 2,

//     },
//     {
//       nome: 'joão3',
//       type: 'suport',
//       esquad: 1,

//     },
//   ]
//   return (
//     <div>
//       {jogadores.map(jogador => (
//         <div>
//           <p>nome:{jogador.nome}</p>
//           <p >estilo:
//             <span style={{ color: jogador.esquad === 2 ? 'red' : 'blue' }}>
//               {jogador.type}
//             </span>
//           </p>
//           <p>esquad:{jogador.esquad !== 1 ? 'flamengo' : 'corintias'}</p>
//           <br />
//         </div>

//       ))}
//     </div>
//   )
// }