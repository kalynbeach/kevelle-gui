import type { Metadata } from "next"

import { Checkbox } from "@/components/ui/checkbox"
import { CheckboxGroup } from "@/components/ui/checkbox-group"
import { Field, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
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
import {
  Demo,
  PageHeader,
  Section,
  Subsection,
} from "@/components/showcase/page"
import { previewState, StateMatrix } from "@/components/showcase/state-matrix"

export const metadata: Metadata = { title: "Selection" }

const sampleRates = [
  { value: "44100", label: "44.1 kHz" },
  { value: "48000", label: "48 kHz" },
  { value: "88200", label: "88.2 kHz" },
  { value: "96000", label: "96 kHz" },
]

const choiceLabel = "font-regular data-disabled:text-neutral-6"

function SampleRateSelect({
  state = "rest",
}: {
  state?: string
}) {
  return (
    <Select
      items={sampleRates}
      defaultValue="48000"
      disabled={state === "disabled"}
    >
      <SelectTrigger
        aria-label="Sample rate"
        className="w-[9rem]"
        {...(state === "disabled" ? {} : previewState(state))}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>CD and video</SelectLabel>
          <SelectItem value="44100">44.1 kHz</SelectItem>
          <SelectItem value="48000">48 kHz</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>High resolution</SelectLabel>
          <SelectItem value="88200">88.2 kHz</SelectItem>
          <SelectItem value="96000">96 kHz</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const checkStates = ["rest", "hover", "focus", "disabled"]

export default function SelectionPage() {
  return (
    <>
      <PageHeader title="Selection" />

      <Section title="Select">
        <Demo>
          <Field className="w-fit">
            <FieldLabel>Sample rate</FieldLabel>
            <SampleRateSelect />
          </Field>
        </Demo>
        <Subsection title="States">
          <StateMatrix
            rows={["select"] as const}
            states={checkStates}
            render={(_, state) => <SampleRateSelect state={state} />}
          />
        </Subsection>
      </Section>

      <Section title="Checkbox">
        <Demo className="flex-col items-start gap-s">
          <Label className={choiceLabel}>
            <Checkbox defaultChecked />
            Normalize loudness
          </Label>
          <Label className={choiceLabel}>
            <Checkbox />
            Add dither
          </Label>
        </Demo>
        <Subsection title="States">
          <StateMatrix
            rows={["unchecked", "checked", "indeterminate"] as const}
            states={checkStates}
            render={(row, state) => (
              <Checkbox
                aria-label={`${row} ${state}`}
                checked={row === "checked"}
                indeterminate={row === "indeterminate"}
                {...previewState(state)}
              />
            )}
          />
        </Subsection>
      </Section>

      <Section title="Checkbox group">
        <Demo>
          <CheckboxGroup
            aria-labelledby="formats-label"
            defaultValue={["wav", "flac"]}
            allValues={["wav", "flac", "mp3"]}
          >
            <Label id="formats-label" className={choiceLabel}>
              <Checkbox parent />
              All formats
            </Label>
            <div className="flex flex-col gap-s ps-l">
              <Label className={choiceLabel}>
                <Checkbox value="wav" />
                WAV
              </Label>
              <Label className={choiceLabel}>
                <Checkbox value="flac" />
                FLAC
              </Label>
              <Label className={choiceLabel}>
                <Checkbox value="mp3" />
                MP3
              </Label>
            </div>
          </CheckboxGroup>
        </Demo>
      </Section>

      <Section title="Radio">
        <Subsection title="States">
          <StateMatrix
            rows={["unchecked", "checked"] as const}
            states={checkStates}
            render={(row, state) => (
              <RadioGroup
                aria-label={`${row} ${state}`}
                value={row === "checked" ? "on" : ""}
                disabled={state === "disabled"}
              >
                <RadioGroupItem
                  value="on"
                  {...(state === "disabled" ? {} : previewState(state))}
                />
              </RadioGroup>
            )}
          />
        </Subsection>
      </Section>

      <Section title="Radio group">
        <Demo>
          <FieldSet>
            <FieldLegend className="text-s">Bit depth</FieldLegend>
            <RadioGroup defaultValue="24">
              <Label className={choiceLabel}>
                <RadioGroupItem value="16" />
                16-bit
              </Label>
              <Label className={choiceLabel}>
                <RadioGroupItem value="24" />
                24-bit
              </Label>
              <Label className={choiceLabel}>
                <RadioGroupItem value="32" />
                32-bit float
              </Label>
            </RadioGroup>
          </FieldSet>
        </Demo>
      </Section>

      <Section title="Switch">
        <Demo className="flex-col items-start gap-s">
          <Label>
            <Switch defaultChecked />
            Loop playback
          </Label>
          <Label>
            <Switch />
            Metronome
          </Label>
        </Demo>
        <Subsection title="States">
          <StateMatrix
            rows={["off", "on"] as const}
            states={["rest", "focus", "disabled"]}
            render={(row, state) => (
              <Switch
                aria-label={`${row} ${state}`}
                checked={row === "on"}
                {...previewState(state)}
              />
            )}
          />
        </Subsection>
      </Section>

      <Section title="Slider">
        <Demo className="flex-col items-stretch gap-l">
          <Field className="max-w-[20rem]">
            <div className="flex items-baseline justify-between">
              <FieldLabel>Volume</FieldLabel>
            </div>
            <Slider defaultValue={64} aria-label="Volume" />
          </Field>
          <div className="flex max-w-[20rem] flex-col gap-xs">
            <span className="text-s font-medium text-neutral-10">
              Frequency range
            </span>
            <Slider
              defaultValue={[20, 80]}
              aria-label="Frequency range"
            />
          </div>
          <div className="flex max-w-[20rem] flex-col gap-xs">
            <span className="text-s font-medium text-neutral-6">Pan</span>
            <Slider defaultValue={50} disabled aria-label="Pan" />
          </div>
        </Demo>
      </Section>
    </>
  )
}
