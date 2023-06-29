import React from "react";


const Modal = ({ setIsOpen, film }) => {
    return (
        <div className="modal-show" onClick={() => setIsOpen(false)}>
            <div id="modal1" className="modal" style={{ display: 'block', top: "35%" }}>
                <div className="modal-content">
                    <h4 className="text-danger">{film.Title}</h4>
                    <p><iframe width="650" height="320" src={film.clip} title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
                </div>
                <div className="modal-footer">
                    <a className="modal-close waves-effect waves-green btn-flat">Close</a>
                </div>
            </div>
        </div>
    )
}
export default Modal;