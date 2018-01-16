import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { basic_magnifier } from 'react-icons-kit/linea/basic_magnifier'

const Form = styled.form`
  display: block;
  max-width: 500px;
  padding: 0 20px;
  background-color: #f5f5f5;
  border: 3px solid transparent;
  border-radius: 4px;
  transition: all 600ms;
  overflow: hidden;

  &:hover, &:focus {
    border-color: #F0F0F0;
  }
`

const Input = styled.input`
  padding: 15px 20px;
  font-size: 20px;
  flex: 1;
  border: none;
  background: none;
`

const Button = styled.button`
  padding: 10px 25px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  
  transition: all 500ms;

  &:hover {
    background-color: #E5E5E6;
  }
`

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <Form>
        <Icon size={20} icon={basic_magnifier} />
        <Input
          ref={ref => this.search}
          name="search"
          placeholder="Search events"
          onChange={this.hanleChange}
        />
      </Form>
    )
  }
}
