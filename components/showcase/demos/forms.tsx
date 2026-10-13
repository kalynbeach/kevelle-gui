"use client"

import * as React from "react"

import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/components/ui/autocomplete"
import { Button } from "@/components/ui/button"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
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
    <Field className="max-w-64">
      <FieldLabel htmlFor="autocomplete-tag">Tag</FieldLabel>
      <Autocomplete items={tags}>
        <AutocompleteInput id="autocomplete-tag" placeholder="ambient" />
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
    <Field className="max-w-64">
      <FieldLabel htmlFor="combobox-instrument">Instrument</FieldLabel>
      <Combobox items={instruments} defaultValue="Electric piano">
        <ComboboxInput
          id="combobox-instrument"
          placeholder="Choose an instrument"
          showClear
        />
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

export function ComboboxChipsDemo() {
  const anchor = useComboboxAnchor()

  return (
    <Field className="max-w-80">
      <FieldLabel htmlFor="combobox-tags">Tags</FieldLabel>
      <Combobox items={tags} multiple defaultValue={["dub", "modular"]}>
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: string[]) => (
              <React.Fragment>
                {values.map((value) => (
                  <ComboboxChip key={value}>{value}</ComboboxChip>
                ))}
                <ComboboxChipsInput
                  id="combobox-tags"
                  placeholder="Add a tag"
                />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No matching tags</ComboboxEmpty>
          <ComboboxList>
            {(tag: string) => (
              <ComboboxItem key={tag} value={tag}>
                {tag}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}

type ProjectErrors = { name?: string; tempo?: string }

function validateProject(data: FormData): ProjectErrors {
  const name = String(data.get("name") ?? "").trim()
  const tempo = Number(data.get("tempo"))
  const errors: ProjectErrors = {}

  if (name.length === 0) errors.name = "Enter a project name."
  else if (name.length < 3) errors.name = "Use at least 3 characters."

  if (!Number.isFinite(tempo) || tempo < 40 || tempo > 240) {
    errors.tempo = "Use a tempo from 40 to 240."
  }

  return errors
}

export function FormDemo() {
  const [errors, setErrors] = React.useState<ProjectErrors>({})

  return (
    <Form
      className="max-w-80"
      noValidate
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const next = validateProject(data)

        setErrors(next)

        if (next.name || next.tempo) return
        toast.add({
          title: "Project created",
          description: `${String(data.get("name"))} is ready.`,
          type: "success",
        })
      }}
    >
      <FieldGroup>
        <Field data-invalid={errors.name ? true : undefined}>
          <FieldLabel htmlFor="project-name">Project name</FieldLabel>
          <Input
            id="project-name"
            name="name"
            placeholder="Night drive"
            aria-invalid={errors.name ? true : undefined}
          />
          <FieldError>{errors.name}</FieldError>
        </Field>
        <Field data-invalid={errors.tempo ? true : undefined}>
          <FieldLabel htmlFor="project-tempo">Tempo</FieldLabel>
          <Input
            id="project-tempo"
            name="tempo"
            type="number"
            defaultValue={120}
            aria-invalid={errors.tempo ? true : undefined}
          />
          {errors.tempo ? (
            <FieldError>{errors.tempo}</FieldError>
          ) : (
            <FieldDescription>Beats per minute, 40 to 240.</FieldDescription>
          )}
        </Field>
        <Field orientation="horizontal">
          <Button type="submit">Create project</Button>
        </Field>
      </FieldGroup>
    </Form>
  )
}
