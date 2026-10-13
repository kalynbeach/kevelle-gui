import type { Metadata } from "next"
import {
  CopyIcon,
  MagnifyingGlassIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react/ssr"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
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
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  AutocompleteDemo,
  ComboboxChipsDemo,
  ComboboxDemo,
  FormDemo,
} from "@/components/showcase/demos/forms"
import {
  Demo,
  PageHeader,
  Section,
  Subsection,
} from "@/components/showcase/page"
import { previewState, StateMatrix } from "@/components/showcase/state-matrix"

export const metadata: Metadata = { title: "Forms" }

const fieldStates = ["rest", "hover", "focus", "invalid", "disabled"]

export default function FormsPage() {
  return (
    <>
      <PageHeader title="Forms" />

      <Section title="Input">
        <Demo className="items-start">
          <Field className="max-w-64">
            <FieldLabel htmlFor="input-track">Track name</FieldLabel>
            <Input id="input-track" placeholder="Night drive" />
          </Field>
          <Field className="max-w-64">
            <FieldLabel htmlFor="input-file">Stem</FieldLabel>
            <Input id="input-file" type="file" />
          </Field>
        </Demo>

        <Subsection title="States">
          <StateMatrix
            rows={["input"] as const}
            states={fieldStates}
            render={(_, state) => (
              <Input
                aria-label={`Track name, ${state}`}
                defaultValue="Night drive"
                className="w-40"
                {...previewState(state)}
              />
            )}
          />
        </Subsection>
      </Section>

      <Section title="Textarea">
        <Demo>
          <Field className="max-w-md">
            <FieldLabel htmlFor="textarea-notes">Session notes</FieldLabel>
            <Textarea
              id="textarea-notes"
              placeholder="Re-amp the guitar DI before mixdown."
            />
          </Field>
        </Demo>
      </Section>

      <Section title="Input group">
        <Demo className="flex-col items-stretch">
          <InputGroup className="max-w-sm">
            <InputGroupAddon>
              <MagnifyingGlassIcon />
            </InputGroupAddon>
            <InputGroupInput
              aria-label="Search samples"
              placeholder="Search samples"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupText>128 results</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup className="max-w-sm">
            <InputGroupAddon>
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput
              aria-label="Share link"
              defaultValue="kevelle.studio/s/41"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs" aria-label="Copy link">
                <CopyIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup className="max-w-sm">
            <InputGroupTextarea
              aria-label="Message"
              placeholder="Leave a note for the mix engineer"
            />
            <InputGroupAddon align="block-end">
              <InputGroupButton size="sm" variant="default">
                <PaperPlaneTiltIcon data-icon="inline-start" />
                Send
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Demo>
      </Section>

      <Section title="Field">
        <Demo>
          <FieldSet className="max-w-md">
            <FieldLegend>Export</FieldLegend>
            <FieldDescription>Settings for the stem bounce.</FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="field-folder">Folder</FieldLabel>
                <Input id="field-folder" defaultValue="~/Music/Stems" />
                <FieldDescription>
                  Each stem is written as a separate WAV file.
                </FieldDescription>
              </Field>
              <Field data-invalid>
                <FieldLabel htmlFor="field-prefix">File prefix</FieldLabel>
                <Input
                  id="field-prefix"
                  defaultValue="night/drive"
                  aria-invalid
                />
                <FieldError>Remove the slash from the prefix.</FieldError>
              </Field>
              <FieldSeparator />
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldLabel htmlFor="field-normalize">Normalize</FieldLabel>
                  <FieldDescription>
                    Peak each stem at −1 dBTP.
                  </FieldDescription>
                </FieldContent>
                <Switch id="field-normalize" defaultChecked />
              </Field>
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
        <Demo className="items-start">
          <ComboboxDemo />
          <ComboboxChipsDemo />
        </Demo>
      </Section>

      <Section title="Number field">
        <Demo>
          <NumberField defaultValue={120} min={40} max={240}>
            <FieldLabel htmlFor="number-tempo">Tempo</FieldLabel>
            <NumberFieldGroup>
              <NumberFieldDecrement />
              <NumberFieldInput id="number-tempo" />
              <NumberFieldIncrement />
            </NumberFieldGroup>
          </NumberField>
        </Demo>
      </Section>

      <Section title="Input OTP">
        <Demo>
          <Field className="w-fit">
            <FieldLabel htmlFor="input-otp">Pairing code</FieldLabel>
            <InputOTP id="input-otp" maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </Field>
        </Demo>
      </Section>

      <Section title="OTP field">
        <Demo>
          <Field className="w-fit">
            <FieldLabel>Device code</FieldLabel>
            <OTPField length={6} aria-label="Device code">
              <OTPFieldInput />
              <OTPFieldInput />
              <OTPFieldInput />
              <OTPFieldSeparator />
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
