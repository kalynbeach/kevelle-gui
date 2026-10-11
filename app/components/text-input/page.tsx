import type { Metadata } from "next"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field"
import {
  OTPField,
  OTPFieldInput,
  OTPFieldSeparator,
} from "@/components/ui/otp-field"
import { Textarea } from "@/components/ui/textarea"
import {
  AutocompleteDemo,
  ComboboxDemo,
  FormDemo,
} from "@/components/showcase/demos/text-input"
import {
  Demo,
  PageHeader,
  Section,
  Subsection,
} from "@/components/showcase/page"
import { previewState, StateMatrix } from "@/components/showcase/state-matrix"

export const metadata: Metadata = { title: "Text input" }

const textFieldStates = ["rest", "hover", "focus", "invalid", "read-only", "disabled"]

function textFieldState(state: string) {
  if (state === "invalid") return { "aria-invalid": true }
  if (state === "read-only") return { readOnly: true }
  return previewState(state)
}

export default function TextInputPage() {
  return (
    <>
      <PageHeader title="Text input" />

      <Section title="Text field">
        <Demo className="flex-col items-stretch">
          <Input placeholder="Track title" className="max-w-[20rem]" />
          <Textarea
            placeholder="Session notes"
            className="max-w-[20rem]"
            defaultValue="Retake the bridge vocals. The second chorus clips at 3:12."
          />
        </Demo>
        <Subsection title="States">
          <StateMatrix
            rows={["input"] as const}
            states={textFieldStates}
            render={(_, state) => (
              <Input
                className="w-[9rem]"
                defaultValue={state === "rest" ? undefined : "Night drive"}
                placeholder="Track title"
                {...textFieldState(state)}
              />
            )}
          />
        </Subsection>
      </Section>

      <Section title="Field">
        <Demo className="items-start gap-xl">
          <Field className="w-[16rem]">
            <FieldLabel>Artist</FieldLabel>
            <Input defaultValue="Kevelle" />
            <FieldDescription>Shown on every exported file.</FieldDescription>
          </Field>
          <Field className="w-[16rem]" invalid>
            <FieldLabel>Email</FieldLabel>
            <Input defaultValue="studio@" />
            <FieldError match>Enter a complete email address.</FieldError>
          </Field>
          <Field className="w-[16rem]" disabled>
            <FieldLabel>Catalog number</FieldLabel>
            <Input defaultValue="KVL-004" />
            <FieldDescription>Assigned at release.</FieldDescription>
          </Field>
        </Demo>
      </Section>

      <Section title="Fieldset">
        <Demo>
          <FieldSet className="w-full max-w-[24rem]">
            <FieldLegend>Studio address</FieldLegend>
            <FieldGroup>
              <Field>
                <FieldLabel>Street</FieldLabel>
                <Input defaultValue="1200 Mission St" />
              </Field>
              <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-s">
                <Field>
                  <FieldLabel>City</FieldLabel>
                  <Input defaultValue="San Francisco" />
                </Field>
                <Field>
                  <FieldLabel>Postal code</FieldLabel>
                  <Input defaultValue="94103" />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
        </Demo>
      </Section>

      <Section title="Form">
        <Demo>
          <FormDemo />
        </Demo>
      </Section>

      <Section title="Autocomplete">
        <Demo>
          <AutocompleteDemo />
        </Demo>
      </Section>

      <Section title="Combobox">
        <Demo>
          <ComboboxDemo />
        </Demo>
      </Section>

      <Section title="Number field">
        <Demo className="items-start gap-xl">
          <Field className="w-fit">
            <FieldLabel>Tempo</FieldLabel>
            <NumberField defaultValue={120} min={40} max={240}>
              <NumberFieldGroup>
                <NumberFieldDecrement />
                <NumberFieldInput />
                <NumberFieldIncrement />
              </NumberFieldGroup>
            </NumberField>
          </Field>
          <Field className="w-fit" disabled>
            <FieldLabel>Bars</FieldLabel>
            <NumberField defaultValue={4}>
              <NumberFieldGroup>
                <NumberFieldDecrement />
                <NumberFieldInput />
                <NumberFieldIncrement />
              </NumberFieldGroup>
            </NumberField>
          </Field>
        </Demo>
      </Section>

      <Section title="OTP field">
        <Demo className="items-start gap-xl">
          <Field>
            <FieldLabel>Verification code</FieldLabel>
            <OTPField length={6}>
              <OTPFieldInput />
              <OTPFieldInput />
              <OTPFieldInput />
              <OTPFieldSeparator />
              <OTPFieldInput />
              <OTPFieldInput />
              <OTPFieldInput />
            </OTPField>
          </Field>
          <Field>
            <FieldLabel>Complete</FieldLabel>
            <OTPField length={4} defaultValue="4821">
              <OTPFieldInput />
              <OTPFieldInput />
              <OTPFieldInput />
              <OTPFieldInput />
            </OTPField>
          </Field>
        </Demo>
      </Section>
    </>
  )
}
