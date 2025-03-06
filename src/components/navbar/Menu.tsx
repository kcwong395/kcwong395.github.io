import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { TransitionProps } from '@mui/material/transitions';
import MenuIcon from "@mui/icons-material/Menu";
import {Fade, Link, Stack} from '@mui/material';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Fade ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>, dest: string) => {
        handleClose();

        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector(dest);

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <React.Fragment>
            <Button onClick={handleClickOpen}>
                <MenuIcon />
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                transitionDuration={800}
                keepMounted
                onClose={handleClose}
                aria-describedby="menu-description"
                PaperProps={{
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    },
                }}
            >
                <DialogContent>
                    <DialogContentText id="menu-description">
                        <Stack spacing={3}>
                            {
                                ['HOME', 'ABOUT ME', 'PROFILE', 'PROJECTS'].map((item) => {
                                    return(
                                        <Link
                                            underline="none"
                                            component="button"
                                            onClick={(evt) => handleClick(evt, "#".concat(item.replaceAll(" ", "").toLowerCase()))}
                                            sx={{ typography: "h6", fontSize: 16 }}>
                                            {item}
                                        </Link>
                                    )
                                })
                            }
                        </Stack>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}