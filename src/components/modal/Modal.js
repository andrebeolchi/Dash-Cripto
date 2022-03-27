
import { Dialog, DialogContent, DialogTitle, Divider, IconButton, Slide, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { forwardRef, memo } from 'react';
import { FaTimes } from 'react-icons/fa';
import { theme } from '../../utils/Theme';

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});


const useStyles = makeStyles({
    dialog: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

const CustomDialog = memo(
    ({
        title,
        open,
        setOpen,
        width,
        children,
        height = 'auto',
        backdropclick = false
    }) => {
        const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

        const classes = useStyles()

        return (
            <Dialog
                open={open}
                fullScreen={fullScreen}
                onClose={() => setOpen(false)}
                TransitionComponent={Transition}
                PaperProps={{
                    elevation: 0,
                    style: { minWidth: width, minHeight: height, margin: 0, backgroundColor: theme.palette.background.main }
                }}
            >
                <DialogTitle
                    style={{ background: theme.palette.secondary.main, userSelect: "none" }}
                    className={classes.dialog}
                >
                    <Typography
                        fontWeight="medium"
                        fontSize={20}
                        color={theme.palette.background.main}
                    >
                        {title}
                    </Typography>
                    <IconButton onClick={() => setOpen(false)}>
                        <FaTimes />
                    </IconButton>
                </DialogTitle>
                <Divider />
                <DialogContent style={{ padding: 20 }}>
                    {children}
                </DialogContent>
            </Dialog>
        );
    }
);

export default CustomDialog;