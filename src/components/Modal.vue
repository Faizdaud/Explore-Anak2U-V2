<!-- Modal.vue -->
<template>
    <div class="modal">
      <div class="modal-content">
        <slot></slot>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ModalDialog",
    methods: {
      closeModal() {
        this.$emit("close");
      },
    },
  };
  </script>
  
  <style scoped>
 /* Modal container */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Modal content */
.modal-content {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 800px;
  text-align: center;
}

/* Close button */
.modal-content button {
  display: block;
  margin: 10px auto;
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

/* Hover effect for close button */
.modal-content button:hover {
  background-color: #0056b3;
}

/* Transition effect when opening the modal */
.modal-enter-active,
.modal-leave-active {
  opacity: 0;
  transition: opacity 0.3s;
}

/* Animation when opening the modal */
.modal-enter,
.modal-leave-to {
  opacity: 1;
}

  </style>
  