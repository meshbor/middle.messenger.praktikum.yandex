import Block from "../../utils/Block";
import template from "./input.hbs";
import styles from "./input.scss";
import { inputValidationHandler } from "../../utils/validation";

const eventsObject = {
  focusin: inputValidationHandler,
  focusout: inputValidationHandler,
};

interface InputProps {
  label: string;
  name: string;
  type: string;
  id: string;
  value?: string;
  styles?: Record<string, string>;
  required?: string;
}

export default class InputBlock extends Block {
  constructor(props: InputProps) {
    super({ ...props, events: eventsObject });
  }

  render() {
    return this.compile(template, {
      label: this.props.label,
      name: this.props.name,
      type: this.props.type,
      id: this.props.id,
      value: this.props.value,
      required: this.props.required,
      title: this.props.title,
      styles,
    });
  }
}
