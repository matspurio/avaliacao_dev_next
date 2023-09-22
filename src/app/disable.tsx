import {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import ComponentModalAlert, {
  IRefProps as ComponentModalBaseRefProps,
} from '../components/modal'

export interface IAthleteDisableRefProps {
  close(): void
  open(): void
}

const AthleteDisable: ForwardRefRenderFunction<IAthleteDisableRefProps> = (
  _,
  ref,
) => {
  const componentModalBaseRef = useRef<ComponentModalBaseRefProps>(null)
  const [hideModal, setHideModal] = useState<boolean>(false)
  const openModal = useCallback(() => {
    setHideModal(false)
    componentModalBaseRef.current?.open()
  }, [])

  const closeModal = useCallback(() => {
    setHideModal(true)
    componentModalBaseRef.current?.close()
  }, [])

  useImperativeHandle(ref, () => ({
    open: openModal,
    close: closeModal,
  }))

  return (
    <ComponentModalAlert
      buttonColor="bg-green-600"
      buttonText="Ativar"
      iconType="WARNING"
      message="Tem certeza de que deseja ativar esse atleta?
  "
      ref={componentModalBaseRef}
      title="Ativar atleta"
    >
      <div className={`${hideModal ? 'hideModal' : ''}`} />
    </ComponentModalAlert>
  )
}
export default forwardRef(AthleteDisable)
