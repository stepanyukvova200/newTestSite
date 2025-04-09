import { Dialog, DialogContent, Modal } from '@mui/material'
import { ReactNode } from 'react'

export const CustomModal = ({
  children,
  open,
  onClose,
}: {
  children: ReactNode
  open: boolean
  onClose: () => void
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      scroll="body"
      slotProps={{
        paper: {
          sx: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            bgcolor: '#121212',
          },
        },
      }}
    >
      <DialogContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  )
}
