import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import React from 'react'

const SaleEdit=()=>
{
    const [open, setOpen] = React.useState(false)

    return(
        <>
       <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      backdrop={"static"}>
      <Modal.Header>Profile Picture</Modal.Header>
      <Modal.Content>
        {/* <Image size='medium' src='/images/wireframe/image.png' wrapped /> */}

        <Modal.Description>
          <p>
            This is an example of expanded content that will cause the modal's
            dimmer to scroll.
          </p>

          
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Proceed <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
        </>
    )
}

export default SaleEdit;