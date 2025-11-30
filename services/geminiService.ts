
// This service has been deprecated in favor of a 1998-style random response bot.
// No API calls are made.

export const sendChatMessage = async (
  _message: string, 
  _history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  return "（現在、王様はAIではなくランダム思考で会話しています）";
};