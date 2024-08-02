import Image from "next/image";
import {useState, useEffect} from 'react'
import {firestore} from '@/firebase'
import {Box, Modal, ModalRoot, Typeography} from '@mui/material'
import {collection, deleteDoc, doc, getDocs, query, setDoc } from 'firebase/firestore'

export default function Home() {
  const {invertory, setsInvertory} = usedDates([])
  const [open, setOpen] = useState ([])
  const [itemName, setItemName] = userState([''])

const  updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'))
    const docs = await getDocs(snapshot)
    const inventoryList = []
    docs.forEach((doc) => {
      inventoryList.push({
        name: doc.id,
        ...doc.data(),
      })
    })
    setInventory(inventoryList)
  }

  const addItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()) {
      const {quantity} = docSnap.data()
      await setDoc(docRef, {quantity: quantity + 1})
      }
    else{
      await setDoc(docRef, (quanity: 1))
    }

    await updateInventory()
  }

  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()) {
      const {quantity} = docSnap.data()
      if(quanity == 1) {
        await deleteDoc(docRef)
      } else {
        await setDoc(docRef, {quantity: quantity - 1})
      }
    }

    await updateInventory()

  }

  useEffect(() => {
    updateInventory()
  }, [])

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return 
  <Box
    width="100vw"
    height="100vh"
    display="flex"
    justifyContents="center"
    alighItems="center"
    gap=(2)

    <Modal
    open=(open)
    onClose=(handleClose)></Modal>
    <Typeography variant="hi">Inventory Management</Typeography>
  </Box>
}
