import React, { useState } from 'react';
import PropTypes from "prop-types";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

function ImageResults(props) {
   
    const [isOpen, setIsOpen] = useState({
        open: false,
        currentImg: "",
    })

   const handleOpen = (img) => {
        setIsOpen({
            open: true,
            currentImg: img
        })
    }

    const handleClose = () => {
        setIsOpen({
            open: false
        })
    }

    let imageListContent;
    const { images } = props;

    if (images) {
        imageListContent = (
            <GridList cols={5}>
                {images.map(img => (
                    <GridTile
                        title={img.tags}
                        key={img.id}
                        subtitle={
                            <span>
                                from <em>{img.user}</em>
                            </span>
                        }
                        actionIcon={
                            <IconButton onClick={()=>/*this was removed from handleopen*/{handleOpen(img.largeImageURL)}}>
                                <ZoomIn color="white" />
                            </IconButton>
                        }
                    >
                            
                    <img src={img.largeImageURL} alt="" />
                    </GridTile>
                ))}
            </GridList>
        )
    } else {
        imageListContent = null;
    };

    const actions = [
        <FlatButton label="Close"
            primary={true}
            onClick={handleClose}
        />
    ];

    return (
        <div>
            {imageListContent}
            <Dialog
                actions={actions}
                modal={false}
                open={isOpen.open}
                onRequestClose={handleClose}
            >
                <img src={isOpen.currentImg} alt="" style={{ width: "100%" }}/>
            </Dialog>
        </div>
    );
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}
 
export default ImageResults;