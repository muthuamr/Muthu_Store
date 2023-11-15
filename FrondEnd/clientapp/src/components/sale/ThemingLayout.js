// import React from 'react'
// import { Button, Card, Image } from 'semantic-ui-react'

// const CardExampleGroups = () => (
//   <Card.Group>
//     <Card>
//       <Card.Content>
//         <Image
//           floated='right'
//           size='mini'
//           src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
//         />
//         <Card.Header>Steve Sanders</Card.Header>
//         <Card.Meta>Friends of Elliot</Card.Meta>
//         <Card.Description>
//           Steve wants to add you to the group <strong>best friends</strong>
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Button basic color='green'>
//             Approve
//           </Button>
//           <Button basic color='red'>
//             Decline
//           </Button>
//         </div>
//       </Card.Content>
//     </Card>
//     <Card>
//       <Card.Content>
//         <Image
//           floated='right'
//           size='mini'
//           src='https://react.semantic-ui.com/images/avatar/large/molly.png'
//         />
//         <Card.Header>Molly Thomas</Card.Header>
//         <Card.Meta>New User</Card.Meta>
//         <Card.Description>
//           Molly wants to add you to the group <strong>musicians</strong>
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Button basic color='green'>
//             Approve
//           </Button>
//           <Button basic color='red'>
//             Decline
//           </Button>
//         </div>
//       </Card.Content>
//     </Card>
//     <Card>
//       <Card.Content>
//         <Image
//           floated='right'
//           size='mini'
//           src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
//         />
//         <Card.Header>Jenny Lawrence</Card.Header>
//         <Card.Meta>New User</Card.Meta>
//         <Card.Description>
//           Jenny requested permission to view your contact details
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Button basic color='green'>
//             Approve
//           </Button>
//           <Button basic color='red'>
//             Decline
//           </Button>
//         </div>
//       </Card.Content>
//     </Card>
//   </Card.Group>
  
// )


// export default CardExampleGroups;


import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'

const ModalExampleScrollingContent = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <></>
    // <Modal
    //   open={open}
    //   onClose={() => setOpen(false)}
    //   onOpen={() => setOpen(true)}
    //   trigger={<Button>Scrolling Content Modal</Button>} backdrop={"static"}>
    //   <Modal.Header>Profile Picture</Modal.Header>
    //   <Modal.Content>
    //     {/* <Image size='medium' src='/images/wireframe/image.png' wrapped /> */}

    //     <Modal.Description>
    //       <p>
    //         This is an example of expanded content that will cause the modal's
    //         dimmer to scroll.
    //       </p>

          
    //     </Modal.Description>
    //   </Modal.Content>
    //   <Modal.Actions>
    //     <Button onClick={() => setOpen(false)} primary>
    //       Proceed <Icon name='chevron right' />
    //     </Button>
    //   </Modal.Actions>
    // </Modal>
  )
}

export default ModalExampleScrollingContent

