import ReactDOM from 'react-dom'

const Portal = () => {
  return <div className="portalBackground"/>
}

const Modal = (props) => {
  return (
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <button onClick={props.onConfirm}>Okay</button>
    </div>
  );
}

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Portal></Portal>,
        document.getElementById('portal-root')
      )}

      {ReactDOM.createPortal(
        <Modal
          title = {props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('portal-root')
      )}
    </>
  );
};

export default ErrorModal;
