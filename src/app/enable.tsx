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

export interface IAthleteEnableRefProps {
  close(): void
  open(): void
}

const AthleteEnable: ForwardRefRenderFunction<IAthleteEnableRefProps> = (
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
      buttonColor="bg-red-600"
      buttonText="Inativar"
      iconType="WARNING"
      message="Tem certeza de que deseja inativar esse atleta?
  "
      ref={componentModalBaseRef}
      title="Inativar atleta"
    >
      <div className={`${hideModal ? 'hideModal' : ''}`} />
    </ComponentModalAlert>
  )
}
export default forwardRef(AthleteEnable)
