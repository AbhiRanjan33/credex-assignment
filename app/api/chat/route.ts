import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Use environment variable for OpenRouter API key
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://yourdomain.com', // Replace with your domain
        'X-Title': 'SoftSell Chatbot',
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.1-8b-instruct:free', // Free-tier model (adjust if needed)
        messages: [
          {
            role: 'system',
            content: 'You are a helpful customer support chatbot for SoftSell, a platform that helps users sell their unused software licenses. Provide clear, concise answers about the process, security, payment, and other relevant topics. If you don’t understand a question, respond with: "I’m sorry, I couldn’t understand your question. Please try rephrasing or click one of the example questions."',
          },
          {
            role: 'user',
            content: message,
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.error?.message || 'Failed to get response from AI' }, { status: response.status });
    }

    const aiResponse = data.choices[0]?.message?.content || 'No response from AI.';
    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}