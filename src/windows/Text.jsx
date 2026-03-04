import React from 'react'
import WindowWrapper from '@hoc/WindowWrapper'
import { WindowControls } from '@components'
import useWindowStore from '@store/window'

const CreateText = () => {
  const { windows } = useWindowStore()
  const data = windows.txtfile.data

  if (!data) return null

  const { name, image, imageUrl, subtitle, description } = data
  const imgSrc = image || imageUrl

  return (
    <>
      <div className='window-header'>
        <WindowControls target="txtfile" />
        <h2>{name || 'Text File'}</h2>
      </div>
      <div className='window-content p-3 overflow-auto max-h-150'>
        {imgSrc && <img src={imgSrc} alt={name} className='text-file-image' />}
        {subtitle && <h3 className='text-file-subtitle'>{subtitle}</h3>}
        {description && Array.isArray(description) && (
          <div className='text-file-descriptions'>
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

const CreateTextWindow = WindowWrapper(CreateText, 'txtfile')
export default CreateTextWindow
