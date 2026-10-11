"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/components/ui/autocomplete"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/toast"

const tags = [
  "ambient",
  "breakbeat",
  "dub",
  "electro",
  "field recording",
  "house",
  "jungle",
  "modular",
  "minimal",
  "techno",
]

export function AutocompleteDemo() {
  return (
    <Field className="w-[16rem]">
      <FieldLabel>Tag</FieldLabel>
      <Autocomplete items={tags}>
        <AutocompleteInput placeholder="e.g. ambient" />
        <AutocompleteContent>
          <AutocompleteEmpty>No matching tags</AutocompleteEmpty>
          <AutocompleteList>
            {(tag: string) => (
              <AutocompleteItem key={tag} value={tag}>
                {tag}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </Field>
  )
}

const instruments = [
  "Bass guitar",
  "Drum machine",
  "Electric piano",
  "Modular synthesizer",
  "Pipe organ",
  "Sampler",
  "Upright piano",
  "Vibraphone",
]

export function ComboboxDemo() {
  return (
    <Field className="w-[16rem]">
      <FieldLabel>Instrument</FieldLabel>
      <Combobox items={instruments} defaultValue="Electric piano">
        <ComboboxInput placeholder="Choose an instrument" showClear />
        <ComboboxContent>
          <ComboboxEmpty>No instruments found</ComboboxEmpty>
          <ComboboxList>
            {(instrument: string) => (
              <ComboboxItem key={instrument} value={instrument}>
                {instrument}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}

export function FormDemo() {
  return (
    <Form
      className="max-w-[20rem]"
      onFormSubmit={(values) => {
        toast.add({
          title: "Project created",
          description: `${String(values.name)} is ready.`,
          type: "success",
        })
      }}
    >
      <FieldGroup>
        <Field name="name">
          <FieldLabel>Project name</FieldLabel>
          <Input required minLength={3} placeholder="Night drive" />
          <FieldError match="valueMissing">Enter a project name.</FieldError>
          <FieldError match="tooShort">Use at least 3 characters.</FieldError>
        </Field>
        <Field name="tempo">
          <FieldLabel>Tempo</FieldLabel>
          <Input
            type="number"
            required
            min={40}
            max={240}
            defaultValue={120}
          />
          <FieldDescription>Beats per minute, 40 to 240.</FieldDescription>
          <FieldError match="rangeOverflow">Use 240 or less.</FieldError>
          <FieldError match="rangeUnderflow">Use 40 or more.</FieldError>
        </Field>
      </FieldGroup>
      <div>
        <Button type="submit">Create project</Button>
      </div>
    </Form>
  )
}
