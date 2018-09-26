import React from 'react'
import ModalDialog, { ModalTransition } from '@atlaskit/modal-dialog'
import Avatar from '@atlaskit/avatar'
import Tooltip from '@atlaskit/tooltip'
import FieldText from '@atlaskit/field-text'
import axios from 'axios'

export default class extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      modals: [],
      url: 'https://V1Host/V1Instance',
      token: '1.11xea1111cT5555IIGIS+LPfJY=',
      avatarSrc: localStorage.getItem('avatarSrc') || '',
    }
  }

  close = () => this.setState({ modals: [] })
  open = () => this.setState({ modals: [1] })

  onUrlChange = url => {
    this.setState({ url })
  }
  onTokenChange = token => {
    this.setState({ token })
  }
  onAvatarSrcChange = response => {}

  onSave = () => {
    const { url, token } = this.state

    const [protocol, rest] = url.split('://')
    const isHttps = protocol.indexOf('s') > 0
    const port = isHttps ? 443 : 80

    const [host, instance] = rest.split('/')

    const data = {
      token,
      host,
      instance,
      port,
      isHttps,
    }

    axios({
      url: 'http://localhost:3000',
      method: 'post',
      data: data,
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        const avatarSrc = 'data:image/gif;base64,' + response.data.src
        localStorage.setItem('avatarSrc', avatarSrc)
        this.setState({
          avatarSrc,
        })
        this.close()
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <React.Fragment>
        <ModalTransition>
          {this.state.modals.map(id => (
            <ModalDialog
              key={id}
              heading="VersionOne Instance"
              onClose={this.close}
              actions={[
                { text: 'Save', onClick: this.onSave },
                { text: 'Close', onClick: this.close },
              ]}
            >
              <FieldText
                autoFocus={true}
                name="url"
                placeholder="VersionOne Url"
                value={this.state.url}
                onChange={this.onUrlChange}
                shouldFitContainerboolean={true}
              />
              <FieldText
                name="token"
                placeholder="Access Token"
                value={this.state.token}
                onChange={this.onTokenChange}
                shouldFitContainerboolean={true}
              />
            </ModalDialog>
          ))}
        </ModalTransition>

        <Tooltip position="right" content="User profile">
          <Avatar
            onClick={this.open}
            src={this.state.avatarSrc}
            size="small"
            borderColor="transparent"
          />
        </Tooltip>
      </React.Fragment>
    )
  }
}
