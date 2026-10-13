"use client"

import * as React from "react"

import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Marker, MarkerContent } from "@/components/ui/marker"
import { Message, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"
import { toast } from "@/components/ui/toast"

const thread = [
  { id: "1", role: "user", text: "Can you check the low end on the mixdown?" },
  {
    id: "2",
    role: "assistant",
    text: "The kick and bass overlap around 60 Hz. The bass is 2 dB louder there.",
  },
  { id: "3", role: "user", text: "What would you change first?" },
  {
    id: "4",
    role: "assistant",
    text: "Sidechain the bass to the kick with a fast release, then high-pass the Rhodes at 120 Hz.",
  },
  { id: "5", role: "user", text: "Do it on a copy of the session." },
  {
    id: "6",
    role: "assistant",
    text: "Done. Night drive (copy) is open with both changes on the bass and keys buses.",
  },
] as const

export function MessageScrollerDemo() {
  return (
    <div className="h-80 w-full max-w-lg border p-4">
      <MessageScrollerProvider>
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent>
              <MessageScrollerItem scrollAnchor={false}>
                <Marker variant="separator">
                  <MarkerContent>Today 14:02</MarkerContent>
                </Marker>
              </MessageScrollerItem>
              {thread.map((message) => (
                <MessageScrollerItem
                  key={message.id}
                  messageId={message.id}
                  scrollAnchor={message.role === "user"}
                >
                  <Message align={message.role === "user" ? "end" : "start"}>
                    <MessageContent>
                      <Bubble
                        variant={message.role === "user" ? "default" : "muted"}
                      >
                        <BubbleContent>{message.text}</BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  )
}

const mixItems = [
  {
    name: "target",
    required: true,
    choices: [
      { value: "streaming" },
      { value: "vinyl" },
      { value: "broadcast" },
    ],
  },
  {
    name: "headroom",
    choices: [{ value: "3" }, { value: "6" }],
  },
] as const

export function QuestionnaireDemo() {
  return (
    <Questionnaire
      className="max-w-lg"
      defaultItem="target"
      items={mixItems}
      shortcuts="letters"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)

        toast.add({
          title: "Master settings saved",
          description: `Target: ${String(data.get("target") ?? "none")}`,
        })
      }}
    >
      <QuestionnaireProgress />
      <QuestionnaireItem name="target" required>
        <QuestionnaireTitle>Where will this master play?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="streaming">
            <span className="font-medium">Streaming</span>
            <QuestionnaireChoiceDescription>
              −14 LUFS integrated
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="vinyl">
            <span className="font-medium">Vinyl</span>
            <QuestionnaireChoiceDescription>
              Mono below 150 Hz
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="broadcast">
            <span className="font-medium">Broadcast</span>
            <QuestionnaireChoiceDescription>
              −23 LUFS, EBU R128
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireItem name="headroom">
        <QuestionnaireTitle>How much headroom?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="3">3 dB</QuestionnaireChoice>
          <QuestionnaireChoice value="6">6 dB</QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireActions className="w-full">
        <QuestionnairePrevious />
        <QuestionnaireNext>Next</QuestionnaireNext>
        <QuestionnaireSubmit>Save</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  )
}
