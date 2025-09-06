import React, { useState, useRef } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submittedData, setSubmittedData] = useState(null);
  const modalRef = useRef();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: '', email: '' });
    // Hide modal using Bootstrap's API to avoid navigation
    if (modalRef.current) {
      const modal = window.bootstrap.Modal.getInstance(modalRef.current);
      if (modal) modal.hide();
    }
  };


  // Bootstrap modal show/hide
  React.useEffect(() => {
    if (showModal && modalRef.current) {
      const modal = new window.bootstrap.Modal(modalRef.current);
      modal.show();
      modalRef.current.addEventListener('hidden.bs.modal', closeModal);
      return () => {
        modalRef.current.removeEventListener('hidden.bs.modal', closeModal);
      };
    }
  }, [showModal]);

  return (
    <div className="container-fluid p-0 m-0" style={{ minHeight: '100vh', minWidth: '100vw', height: '100vh', width: '100vw', background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary mb-3">Entry Form</h2>
        <p className="text-secondary">Click below to open a form!</p>
      </div>
      <div className="d-flex flex-column align-items-center">
        <button className="btn btn-lg btn-primary shadow" onClick={openModal}>
          Open Form Modal
        </button>

        {/* Modal */}
        <div className="modal fade modal-fullscreen" tabIndex="-1" ref={modalRef}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">Enter Your Details</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-semibold">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Display submitted data */}
        {submittedData && (
          <div className="card mt-4 shadow-sm border-primary" style={{ maxWidth: 400 }}>
            <div className="card-body">
              <h5 className="card-title text-primary">Submitted Data</h5>
              <p className="mb-1"><span className="fw-semibold">Name:</span> {submittedData.name}</p>
              <p className="mb-0"><span className="fw-semibold">Email:</span> {submittedData.email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;