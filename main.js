const app = (function () {
  'use strict'

  const onDragabbleEvents = () => {
    const dragabbleBox = document.querySelector('.box__dragabble')
    const allBoxs = document.querySelectorAll('.box')

    dragabbleBox.addEventListener('dragstart', onDragStart)
    dragabbleBox.addEventListener('dragend', onDragEnd)

    for (const box of allBoxs) {
      box.addEventListener('dragover', onDragOver)
      box.addEventListener('dragenter', onDragEnter)
      box.addEventListener('dragleave', onDragLeave)
      box.addEventListener('drop', onDragDrop.bind(null, dragabbleBox))
    }
  }

  const onDragStart = (oEvent) => {
    const dragabbleBox = oEvent.target
    setTimeout(() => (dragabbleBox.className = 'invisible'), 0)
  }

  const onDragEnd = (oEvent) => {
    const dragabbleBox = oEvent.target
    dragabbleBox.className = 'box__dragabble'
  }

  const onDragOver = (oEvent) => {
    oEvent.preventDefault()
  }

  const onDragEnter = (oEvent) => {
    oEvent.preventDefault()
    oEvent.target.classList.add('hovered')
  }

  const onDragLeave = (oEvent) => {
    oEvent.target.className = 'box'
  }

  const onDragDrop = (dragabbleBox, oEvent) => {
    oEvent.target.className = 'box'
    oEvent.target.append(dragabbleBox)
  }

  // init function thats run once DOM is loaded
  const init = () => {
    onDragabbleEvents()
  }

  window.addEventListener('DOMContentLoaded', init)
})()
