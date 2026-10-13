import type { Metadata } from "next"
import { FileAudioIcon, XIcon } from "@phosphor-icons/react/ssr"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Marker, MarkerContent } from "@/components/ui/marker"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"
import {
  MessageScrollerDemo,
  QuestionnaireDemo,
} from "@/components/showcase/demos/conversation"
import { Demo, PageHeader, Section } from "@/components/showcase/page"

export const metadata: Metadata = { title: "Conversation" }

export default function ConversationPage() {
  return (
    <>
      <PageHeader title="Conversation" />

      <Section title="Message">
        <Demo>
          <MessageGroup className="w-full max-w-lg">
            <Message>
              <MessageAvatar>
                <Avatar size="sm">
                  <AvatarFallback>MA</AvatarFallback>
                </Avatar>
              </MessageAvatar>
              <MessageContent>
                <MessageHeader>Mix engineer</MessageHeader>
                <Bubble variant="muted">
                  <BubbleContent>
                    Revision 4 is up. Vocals sit 1 dB lower.
                  </BubbleContent>
                </Bubble>
                <MessageFooter>14:06</MessageFooter>
              </MessageContent>
            </Message>
            <Message align="end">
              <MessageContent>
                <Bubble>
                  <BubbleContent>
                    Sounds right. Bouncing stems now.
                  </BubbleContent>
                </Bubble>
                <MessageFooter>14:08 · Read</MessageFooter>
              </MessageContent>
            </Message>
          </MessageGroup>
        </Demo>
      </Section>

      <Section title="Bubble">
        <Demo className="flex-col items-start">
          <Bubble>
            <BubbleContent>Default</BubbleContent>
          </Bubble>
          <Bubble variant="secondary">
            <BubbleContent>Secondary</BubbleContent>
          </Bubble>
          <Bubble variant="muted">
            <BubbleContent>Muted</BubbleContent>
          </Bubble>
          <Bubble variant="outline">
            <BubbleContent>Outline</BubbleContent>
          </Bubble>
          <Bubble variant="destructive">
            <BubbleContent>Upload failed</BubbleContent>
          </Bubble>
        </Demo>
      </Section>

      <Section title="Message scroller">
        <Demo>
          <MessageScrollerDemo />
        </Demo>
      </Section>

      <Section title="Attachment">
        <Demo>
          <AttachmentGroup>
            <Attachment>
              <AttachmentMedia>
                <FileAudioIcon />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>vocal_take3.wav</AttachmentTitle>
                <AttachmentDescription>14.2 MB</AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>
                <AttachmentAction aria-label="Remove vocal_take3.wav">
                  <XIcon />
                </AttachmentAction>
              </AttachmentActions>
            </Attachment>
            <Attachment state="error">
              <AttachmentMedia>
                <FileAudioIcon />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>room_tone.wav</AttachmentTitle>
                <AttachmentDescription>Upload failed</AttachmentDescription>
              </AttachmentContent>
            </Attachment>
          </AttachmentGroup>
        </Demo>
      </Section>

      <Section title="Marker">
        <Demo className="flex-col items-stretch">
          <Marker>
            <MarkerContent>Session started 14:02</MarkerContent>
          </Marker>
          <Marker variant="separator">
            <MarkerContent>Yesterday</MarkerContent>
          </Marker>
          <Marker variant="border">
            <MarkerContent>Revision 4</MarkerContent>
          </Marker>
        </Demo>
      </Section>

      <Section title="Questionnaire">
        <Demo>
          <QuestionnaireDemo />
        </Demo>
      </Section>
    </>
  )
}
