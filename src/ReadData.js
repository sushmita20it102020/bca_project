import { projectFirestore,doc,getDoc,getDocs,collection} from './firebase/config';
export let global_array=[]
export async function ReadData()
{
const querySnapshot = await getDocs(collection(projectFirestore,"ChatbotData"))
  querySnapshot.forEach((doc)=>{
   //console.log(doc.id,"=>",doc.data())
   global_array.push(doc.data())
  })
}


