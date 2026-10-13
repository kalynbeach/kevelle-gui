import type { Metadata } from "next"

import { Checkbox } from "@/components/ui/checkbox"
import { CheckboxGroup } from "@/components/ui/checkbox-group"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { CalendarDemo, SliderDemo } from "@/components/showcase/demos/selection"
import {
  Demo,
  PageHeader,
  Section,
  Subsection,
} from "@/components/showcase/page"
import { previewState, StateMatrix } from "@/components/showcase/state-matrix"

export const metadata: Metadata = { title: "Selection" }

const rates = [
  { label: "44.1 kHz", value: "44100" },
  { label: "48 kHz", value: "48000" },
  { label: "96 kHz", value: "96000" },
]

const depths = [
  { label: "16-bit", value: "16" },
  { label: "24-bit", value: "24" },
  { label: "32-bit float", value: "32f" },
]

const formats = [...rates, ...depths]

const toggleStates = ["rest", "hover", "focus", "invalid", "disabled"]

export default function SelectionPage() {
  return (
    <>
      <PageHeader title="Selection" />

      <Section title="Select">
        <Demo>
          <Field className="w-fit">
            <FieldLabel htmlFor="select-rate">Sample rate</FieldLabel>
            <Select items={formats} defaultValue="48000">
              <SelectTrigger id="select-rate" className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Rate</SelectLabel>
                  {rates.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Bit depth</SelectLabel>
                  {depths.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </Demo>
      </Section>

      <Section title="Native select">
        <Demo>
          <Field className="w-fit">
            <FieldLabel htmlFor="native-format">Format</FieldLabel>
            <NativeSelect id="native-format" defaultValue="wav">
              <NativeSelectOptGroup label="Lossless">
                <NativeSelectOption value="wav">WAV</NativeSelectOption>
                <NativeSelectOption value="aiff">AIFF</NativeSelectOption>
                <NativeSelectOption value="flac">FLAC</NativeSelectOption>
              </NativeSelectOptGroup>
              <NativeSelectOptGroup label="Lossy">
                <NativeSelectOption value="mp3">MP3</NativeSelectOption>
              </NativeSelectOptGroup>
            </NativeSelect>
          </Field>
        </Demo>
      </Section>

      <Section title="Checkbox">
        <Demo className="flex-col items-start">
          <Field orientation="horizontal">
            <Checkbox id="checkbox-dither" defaultChecked />
            <FieldLabel htmlFor="checkbox-dither">Dither on export</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="checkbox-tail" />
            <FieldContent>
              <FieldLabel htmlFor="checkbox-tail">
                Include reverb tails
              </FieldLabel>
              <FieldDescription>
                Adds two bars after the last region.
              </FieldDescription>
            </FieldContent>
          </Field>
        </Demo>

        <Subsection title="States">
          <StateMatrix
            rows={["unchecked", "checked"] as const}
            states={toggleStates}
            render={(row, state) => (
              <Checkbox
                aria-label={`${row}, ${state}`}
                defaultChecked={row === "checked"}
                {...previewState(state)}
              />
            )}
          />
        </Subsection>
      </Section>

      <Section title="Checkbox group">
        <Demo>
          <FieldSet>
            <FieldLegend variant="label">Stems</FieldLegend>
            <CheckboxGroup defaultValue={["drums", "bass"]}>
              {["Drums", "Bass", "Keys", "Vocals"].map((stem) => (
                <Field key={stem} orientation="horizontal">
                  <Checkbox
                    id={`stem-${stem.toLowerCase()}`}
                    name="stems"
                    value={stem.toLowerCase()}
                  />
                  <FieldLabel htmlFor={`stem-${stem.toLowerCase()}`}>
                    {stem}
                  </FieldLabel>
                </Field>
              ))}
            </CheckboxGroup>
          </FieldSet>
        </Demo>
      </Section>

      <Section title="Radio group">
        <Demo>
          <FieldSet>
            <FieldLegend variant="label">Monitoring</FieldLegend>
            <RadioGroup defaultValue="stereo">
              {[
                ["mono", "Mono"],
                ["stereo", "Stereo"],
                ["surround", "5.1 surround"],
              ].map(([value, label]) => (
                <Field key={value} orientation="horizontal">
                  <RadioGroupItem id={`radio-${value}`} value={value} />
                  <FieldLabel htmlFor={`radio-${value}`}>{label}</FieldLabel>
                </Field>
              ))}
            </RadioGroup>
          </FieldSet>
        </Demo>
      </Section>

      <Section title="Switch">
        <Demo className="flex-col items-start">
          <Field orientation="horizontal">
            <Switch id="switch-click" defaultChecked />
            <FieldLabel htmlFor="switch-click">Click track</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Switch id="switch-loop" size="sm" />
            <FieldLabel htmlFor="switch-loop">Loop selection</FieldLabel>
          </Field>
        </Demo>

        <Subsection title="States">
          <StateMatrix
            rows={["off", "on"] as const}
            states={["rest", "hover", "focus", "disabled"]}
            render={(row, state) => (
              <Switch
                aria-label={`${row}, ${state}`}
                defaultChecked={row === "on"}
                {...previewState(state)}
              />
            )}
          />
        </Subsection>
      </Section>

      <Section title="Slider">
        <Demo className="flex-col items-stretch">
          <SliderDemo />
          <Slider
            aria-label="Loop range"
            thumbLabels={["Loop start", "Loop end"]}
            defaultValue={[16, 48]}
            max={64}
            className="max-w-sm"
          />
        </Demo>
      </Section>

      <Section title="Calendar">
        <Demo>
          <CalendarDemo />
        </Demo>
      </Section>
    </>
  )
}
