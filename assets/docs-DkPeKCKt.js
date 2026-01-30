var d=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);import"./modulepreload-polyfill-B5Qt9EMX.js";import{f as h}from"./faqs-DhkfoJzG.js";var f=d((x,l)=>{function u(){return`
    <h1>Frequently Asked Questions</h1>
    ${h.map(e=>`
      <h2>${e.question}</h2>
      <p>${e.answer}</p>
    `).join("")}
  `}function g(e){return typeof chrome<"u"&&chrome.runtime&&chrome.runtime.getURL?chrome.runtime.getURL(e):"/"+e}function n(){const e=document.getElementById("docs-logo");e&&(typeof chrome<"u"&&chrome.runtime&&chrome.runtime.getURL?e.src=chrome.runtime.getURL("icons/icon128.png"):e.src="/icons/icon128.png")}const m={"Chrome Web Store Installation":"store.png","Welcome Page":"welcome_page.png","Export Sources Interface":"export_source.png","Export Format Options":"export_formats.png","Prompt Holder Interface":"prompt_holder.png","Notes Export Interface":"export_notes.png","Import Button on AI Platform":"import_on_Ai.png","Notebook Selection Dialog":"import_in_docs.png","Chat Export Buttons":"export_chat_panel.png","Message Selection with Checkboxes":"checkbox_in_chat_panel.png","Export options in chat panel":"export_options_in_chat_panel.png","Source Views Interface":"source_view_options.png","Source View Filters":"source_search.png","Sync Google Docs Button":"google_doc_sync.png","Search Bar on Dashboard":"search_bar.png","Filtered Notebook Results":"search_notebook_with_filter.png","Context Menu with Highlight Option":"snipe_context_menu.png","Notebook Selection Popup":"snipe_download_popup.png","Usage Limits Display in Popup":"usage_limit_display.png"};function o(e=800,t=400,r="Screenshot"){const i=m[r];return i?`<img src="${g(`src/docs/assets/${i}`)}" alt="${r}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 24px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />`:`<div class="image-placeholder" style="width: ${e}px; max-width: 100%; height: ${t}px;">${r}</div>`}const a={index:{title:"Kortex Documentation",content:`
      <h1>Welcome to Kortex</h1>
      <p class="lead">Your AI conversation companion. Save, export, and manage your prompts across all your favorite AI platforms.</p>
      
      <h2>What Kortex Does</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">📤</div>
          <h3>Export Notebook Sources</h3>
          <p>Export all sources from your NotebookLM notebooks in multiple formats: PDF, Markdown, Plain Text, or ZIP archives with batch export support.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📥</div>
          <h3>Import to NotebookLM</h3>
          <p>Import content from LinkedIn, Reddit, Twitter/X, Google Docs, and AI platform conversations directly into NotebookLM with one click.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💬</div>
          <h3>Prompt Holder</h3>
          <p>Save, organize, and reuse your best prompts with folders and tags. Build a library of effective prompts for all your AI interactions.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📝</div>
          <h3>Export Notes & Artifacts</h3>
          <p>Export AI-generated notes, study guides, and other artifacts from NotebookLM in your preferred format with one-click download.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💭</div>
          <h3>Export Chat Conversations</h3>
          <p>Export full or curated chat conversations from ChatGPT, Claude, Gemini, and Perplexity to NotebookLM with message selection.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">👁️</div>
          <h3>Source Views</h3>
          <p>Organize and manage multiple NotebookLM projects with source views. Keep track of all your research sources in one place.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">👀</div>
          <h3>Preview & Edit (Pro)</h3>
          <p>Preview and edit your exports before downloading. Perfect your content with live markdown preview and KaTeX math rendering.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔄</div>
          <h3>Google Docs Sync (Pro)</h3>
          <p>One-click instant sync for all Google Doc sources. Keep your NotebookLM sources up-to-date automatically without manual lifting.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔍</div>
          <h3>Smart Search</h3>
          <p>Search through your sources and notebooks instantly. Find specific documents or content within your knowledge base quickly.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🗑️</div>
          <h3>Bulk Management</h3>
          <p>Delete multiple sources at once. Filter sources by type (PDF, Google Docs, Web, Text, YouTube) and manage them efficiently.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">✂️</div>
          <h3>Highlight & Snipe</h3>
          <p>Select any text on the web and send it directly to NotebookLM. Perfect for capturing quotes, research snippets, and important information.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📋</div>
          <h3>Curated Exports</h3>
          <p>Select specific messages from conversations to create curated briefings. Export only what matters most to you.</p>
        </div>
      </div>
      
      <h2>Works With</h2>
      <div class="platforms-grid" style="display: flex; flex-wrap: wrap; gap: 12px; margin: 24px 0;">
        <span style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 8px 16px; border-radius: 8px; font-weight: 500;">ChatGPT</span>
        <span style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 8px 16px; border-radius: 8px; font-weight: 500;">Gemini</span>
        <span style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 8px 16px; border-radius: 8px; font-weight: 500;">Claude</span>
        <span style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 8px 16px; border-radius: 8px; font-weight: 500;">Perplexity</span>
        <span style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 8px 16px; border-radius: 8px; font-weight: 500;">X (Twitter)</span>
        <span style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 8px 16px; border-radius: 8px; font-weight: 500;">Reddit</span>
        <span style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 8px 16px; border-radius: 8px; font-weight: 500;">LinkedIn</span>
        <span style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 8px 16px; border-radius: 8px; font-weight: 500;">NotebookLM</span>
      </div>
      
      <h2>Getting Started</h2>
      <div style="margin: 24px 0;">
        <div style="display: flex; margin-bottom: 24px;">
          <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--primary-color); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 16px; flex-shrink: 0;">1</div>
          <div>
            <h3 style="margin-top: 0; margin-bottom: 8px;">Sign In</h3>
            <p style="margin: 0;">Click the extension icon and sign in with Google to get started. Your data will be synced across devices.</p>
          </div>
        </div>
        <div style="display: flex; margin-bottom: 24px;">
          <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--primary-color); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 16px; flex-shrink: 0;">2</div>
          <div>
            <h3 style="margin-top: 0; margin-bottom: 8px;">Start Using</h3>
            <p style="margin: 0;">Visit your favorite AI platform (ChatGPT, Gemini, Claude, X/Twitter, Reddit, LinkedIn, etc.) and start saving prompts and conversations!</p>
          </div>
        </div>
        <div style="display: flex; margin-bottom: 24px;">
          <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--primary-color); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 16px; flex-shrink: 0;">3</div>
          <div>
            <h3 style="margin-top: 0; margin-bottom: 8px;">Export & Share</h3>
            <p style="margin: 0;">Export your conversations to NotebookLM or download them as PDF, Markdown, or Text files.</p>
          </div>
        </div>
      </div>
      
      <p><a href="#" data-page="installation" style="display: inline-block; margin-top: 16px; padding: 12px 24px; background: var(--primary-color); color: white; text-decoration: none; border-radius: 8px; font-weight: 500;">Get Started with Installation →</a></p>
    `},installation:{title:"Installation",content:`
      <h1>Installation</h1>
      <p>How to install Kortex on Chrome</p>
      
      <h2>Chrome Installation</h2>
      <ol>
        <li>Visit the <a href="https://chromewebstore.google.com/detail/kortex/hdapplggdhndkblofffknpmnnnnbncbn" target="_blank">Chrome Web Store</a></li>
        <li>Click <strong>"Add to Chrome"</strong></li>
        <li>Confirm by clicking <strong>"Add extension"</strong> in the popup</li>
        <li>The extension icon will appear in your browser toolbar</li>
      </ol>
      ${o(800,400,"Chrome Web Store Installation")}
      
      <h2>First Time Setup</h2>
      <p>After installing Kortex:</p>
      <ol>
        <li>A welcome page will open automatically</li>
        <li>Sign in with your Google account or create an account with email/password</li>
        <li>If using email/password, verify your email address</li>
        <li>After signing in, you're ready to start using Kortex!</li>
      </ol>
      ${o(800,400,"Welcome Page")}
      
      <h2>Browser Compatibility</h2>
      <p>Kortex currently supports:</p>
      <ul>
        <li><strong>Google Chrome</strong> (Recommended)</li>
        <li><strong>Microsoft Edge</strong> (Chromium-based)</li>
        <li><strong>Brave Browser</strong></li>
        <li>Other Chromium-based browsers</li>
      </ul>
      <p>Firefox support is coming soon.</p>
    `},"export-notebook-sources":{title:"Export Notebook Sources",content:`
      <h1>Export Notebook Sources</h1>
      <p>The primary feature of Kortex. Export your NotebookLM notebook sources to your local machine in various formats.</p>
      <p>If you haven't installed the extension in your browser, please <a href="#" data-page="installation">install it first</a>.</p>
      
      <h2>How it works</h2>
      <ol>
        <li>Navigate to your NotebookLM notebook</li>
        <li>Click the download icon in the source panel header</li>
        <li>Choose your preferred format (PDF, Markdown, Text, or ZIP)</li>
        <li>Select which sources to export</li>
        <li>Click "Download" - your files will be saved to your Downloads folder</li>
      </ol>
      ${o(800,400,"Export Sources Interface")}
      
      <h2>Supported Formats</h2>
      <ul>
        <li><strong>PDF</strong>: Professional PDF documents with formatted content</li>
        <li><strong>Markdown</strong>: Intelligently formatted markdown with proper hierarchy detection (headings, lists, paragraphs)</li>
        <li><strong>Text</strong>: Plain text format for maximum compatibility</li>
        <li><strong>ZIP</strong>: Compressed archive containing all selected sources</li>
      </ul>
      ${o(800,400,"Export Format Options")}
      
      <h2>Export Limits</h2>
      <p>Export limits depend on your subscription tier:</p>
      <ul>
        <li><strong>Basic</strong>: 15 exports per month (free)</li>
        <li><strong>Lite</strong>: 80 exports per month ($3.99/month)</li>
        <li><strong>Pro</strong>: Unlimited exports ($6.99/month)</li>
      </ul>
      <p><strong>Note</strong>: Export limits reset monthly for Basic and Lite tiers. If you are on credit system, each export costs 10 credits from your account balance.</p>
      
      <h2>Tips</h2>
      <ul>
        <li>Select multiple sources to export them all at once</li>
        <li>PDF format preserves formatting best for documents</li>
        <li>Markdown format uses intelligent hierarchy detection for better readability and structure</li>
        <li>ZIP format includes all selected sources in a single file</li>
      </ul>
    `},"prompt-holder":{title:"Prompt Holder",content:`
      <h1>Prompt Holder</h1>
      <p>Save, organize, and manage your NotebookLM prompts with the Prompt Holder feature. Create folders, add tags, and quickly access your saved prompts.</p>
      <p>If you haven't installed the extension in your browser, please <a href="#" data-page="installation">install it first</a>.</p>
      
      <h2>How it works</h2>
      <ol>
        <li>Navigate to your NotebookLM notebook</li>
        <li>Look for the Kortex Prompt Holder button (appears next to the share button)</li>
        <li>Click the button to open the Prompt Holder modal</li>
        <li>Create folders to organize your prompts</li>
        <li>Save prompts with custom names and tags</li>
        <li>Search and filter prompts by folder, tag, or name</li>
      </ol>
      ${o(800,400,"Prompt Holder Interface")}
      
      <h2>Features</h2>
      <ul>
        <li><strong>Folder Organization</strong>: Create custom folders with color coding</li>
        <li><strong>Tag System</strong>: Add tags to prompts for easy filtering</li>
        <li><strong>Search</strong>: Quickly find prompts by name, content, or tag</li>
        <li><strong>Preview</strong>: Preview prompt content before using</li>
        <li><strong>Quick Access</strong>: Access saved prompts directly from NotebookLM</li>
        <li><strong>Cloud Sync</strong>: Prompts are synced across all your devices via Firestore</li>
      </ul>
      
      <h2>Prompt Holder Limits</h2>
      <p>Prompt limits work on a slot-based system:</p>
      <ul>
        <li><strong>Basic</strong>: 5 slots available</li>
        <li><strong>Lite</strong>: 30 slots available</li>
        <li><strong>Pro</strong>: Unlimited slots</li>
      </ul>
      <p><strong>Note</strong>: You have a fixed number of slots. When you delete a prompt, that slot becomes available again.</p>
    `},"getting-started":{title:"Getting Started",content:`
      <h1>Getting Started</h1>
      <p>Welcome to Kortex! This guide will help you get started with the extension in just a few minutes.</p>
      
      <h2>Installation</h2>
      <ol>
        <li>Visit the Chrome Web Store</li>
        <li>Search for "Kortex"</li>
        <li>Click "Add to Chrome"</li>
        <li>Confirm installation</li>
        <li>The extension icon will appear in your toolbar</li>
      </ol>
      <p>For detailed installation instructions, see the <a href="#" data-page="installation">Installation Guide</a>.</p>
      
      <h2>First Time Setup</h2>
      <ol>
        <li>Click the Kortex extension icon</li>
        <li>A welcome page will open automatically</li>
        <li>Sign in with your Google account or create an account with email/password</li>
        <li>If using email/password, verify your email address</li>
        <li>After signing in, NotebookLM will open automatically</li>
      </ol>
      
      <h2>Basic Usage</h2>
      <ol>
        <li>Navigate to a NotebookLM notebook</li>
        <li>Click the Kortex extension icon</li>
        <li>Click "Export Sources" to export notebook sources</li>
        <li>Select your format and sources</li>
        <li>Download your files</li>
      </ol>
    `},faq:{title:"FAQ",content:u()},support:{title:"Support",content:`
      <h1>Support</h1>
      <p>Get help with Kortex through multiple support channels.</p>
      
      <h2>Getting Help</h2>
      <ul>
        <li><strong>Documentation</strong>: Check this documentation for answers</li>
        <li><strong>In-App Support</strong>: Click the extension icon → Settings (⚙️) → "Get Support" to submit a support request</li>
        <li><strong>Email</strong>: kortexnotebooklm@gmail.com</li>
        <li><strong>Chrome Web Store</strong>: Leave a review or contact us through the store</li>
      </ul>
      
      <h2>Submitting a Support Request</h2>
      <ol>
        <li>Click the Kortex extension icon</li>
        <li>Click the settings/gear icon (⚙️)</li>
        <li>Click "Get Support" in the footer</li>
        <li>Fill out the support form with your issue details</li>
        <li>Click "Submit"</li>
      </ol>
    `},changelog:{title:"Changelog",content:`
      <h1>Changelog</h1>
      
      <h2>Version 2.8.0</h2>
      <ul>
        <li>✨ Added Source Deletion feature - Delete sources from NotebookLM notebooks with bulk selection</li>
        <li>✨ Added X (Twitter) thread scraping support - Import entire Twitter/X threads to NotebookLM</li>
        <li>✨ Added Reddit post import support - Import Reddit posts with full content</li>
        <li>✨ Enhanced X (Twitter) integration with NotebookLM button in thread header</li>
        <li>✨ Improved content preview and extraction for X (Twitter) threads</li>
        <li>🔧 Fixed LinkedIn button state getting stuck on 'checking import limit'</li>
        <li>🔧 Modularized content folder - Split platforms and utils into separate modules</li>
        <li>🔧 Improved UI styling with better color contrast and placeholder visibility</li>
        <li>🔧 Enhanced dropdown UI with professional industry-standard design</li>
      </ul>
      
      <h2>Version 2.7.0</h2>
      <ul>
        <li>✨ Redesigned welcome page with left-right layout</li>
        <li>✨ Added email/password authentication option</li>
        <li>✨ Email verification flow for new accounts</li>
        <li>✨ Import count tracking - Track imports from LLMs and Google Docs</li>
        <li>✨ Updated all feature limits (exports, imports, prompts, source views)</li>
        <li>🔧 Improved popup UI with larger window size</li>
      </ul>
      
      <h2>Version 2.6.0</h2>
      <ul>
        <li>✨ Added Highlight & Snipe feature - Right-click to save highlighted text to NotebookLM</li>
        <li>✨ Context menu integration for quick text capture from any webpage</li>
        <li>✨ Snippet popup with notebook selection and search</li>
      </ul>
      
      <h2>Version 2.5.0</h2>
      <ul>
        <li>✨ Added Feature Management - Customize which features appear in the interface</li>
        <li>✨ Toggle individual features on/off from the extension popup</li>
      </ul>
      
      <p><em>For complete changelog, see the full documentation.</em></p>
    `},roadmap:{title:"Roadmap",content:`
      <h1>Roadmap</h1>
      
      <h2>Upcoming Features</h2>
      <ul>
        <li>🔜 Batch export from multiple notebooks</li>
        <li>🔜 Custom export templates</li>
        <li>🔜 Export scheduling</li>
        <li>🔜 API access (Pro tier)</li>
        <li>🔜 Firefox browser support</li>
        <li>🔜 Export history</li>
        <li>🔜 Enhanced cloud storage features</li>
        <li>🔜 Prompt sharing and collaboration</li>
        <li>🔜 Advanced source view filters</li>
      </ul>
    `},"export-notes":{title:"Export Notes and Artifacts",content:`
      <h1>Export Notes and Artifacts</h1>
      <p>Export AI-generated notes, study guides, quizzes, briefings, and other artifacts from your NotebookLM notebooks.</p>
      <p>If you haven't installed the extension in your browser, please <a href="#" data-page="installation">install it first</a>.</p>
      
      <h2>How it works</h2>
      <ol>
        <li>Navigate to your NotebookLM notebook</li>
        <li>Click the export button in the studio panel (appears in the notes list header)</li>
        <li>A popup will open showing all available notes and artifacts</li>
        <li>Select which notes to export using checkboxes</li>
        <li>Choose your preferred format (Markdown, Text, or PDF)</li>
        <li>Click "Download" - your files will be saved to your Downloads folder</li>
      </ol>
      ${o(800,400,"Notes Export Interface")}
      
      <h2>Supported Note Types</h2>
      <ul>
        <li><strong>Notes</strong>: Standard AI-generated notes</li>
        <li><strong>Study Guides</strong>: Comprehensive study materials</li>
        <li><strong>Quizzes</strong>: Interactive quiz content</li>
        <li><strong>Briefings</strong>: Summary briefings</li>
        <li><strong>FAQs</strong>: Frequently asked questions</li>
        <li><strong>Timelines</strong>: Chronological content</li>
      </ul>
      
      <h2>Supported Formats</h2>
      <ul>
        <li><strong>Markdown (.md)</strong>: Intelligently formatted markdown with proper hierarchy (headings, lists, paragraphs)</li>
        <li><strong>Text (.txt)</strong>: Plain text format for maximum compatibility</li>
        <li><strong>PDF (.pdf)</strong>: Professional PDF documents with formatted content</li>
      </ul>
      
      <h2>Export Limits</h2>
      <p>Notes export uses the same limits as source exports:</p>
      <ul>
        <li><strong>Basic</strong>: 15 exports per month (free)</li>
        <li><strong>Lite</strong>: 80 exports per month ($3.99/month)</li>
        <li><strong>Pro</strong>: Unlimited exports ($6.99/month)</li>
      </ul>
      <p><strong>Note</strong>: Export limits are shared between source exports and notes exports. Export limits reset monthly for Basic and Lite tiers. If you are on credit system, each export costs 10 credits from your account balance.</p>
    `},"import-to-notebooklm":{title:"Import to NotebookLM",content:`
      <h1>Import to NotebookLM</h1>
      <p>Import your AI conversations and Google Docs directly into NotebookLM. Track your imports and manage your usage with monthly limits.</p>
      <p>If you haven't installed the extension in your browser, please <a href="#" data-page="installation">install it first</a>.</p>
      
      <h2>How it works</h2>
      <ol>
        <li>Visit any supported platform (ChatGPT, Gemini, Claude, Perplexity, X/Twitter, Reddit, LinkedIn) or Google Docs</li>
        <li>Click the Kortex import button (appears in the chat interface, thread header, or post action bar)</li>
        <li>Select a notebook or create a new one</li>
        <li>Your conversation, thread, post, or document will be imported as a source in NotebookLM</li>
        <li>The import count is tracked and displayed in your extension popup</li>
      </ol>
      ${o(800,400,"Import Button on AI Platform")}
      
      <h2>Supported Import Types</h2>
      <ul>
        <li><strong>Chat Conversations</strong>: Import full conversations from ChatGPT, Gemini, Claude, Perplexity</li>
        <li><strong>X (Twitter) Threads</strong>: Import entire Twitter/X threads with all replies and context</li>
        <li><strong>Reddit Posts</strong>: Import Reddit posts with full content and context</li>
        <li><strong>LinkedIn Posts</strong>: Import LinkedIn feed posts with author information and source URL</li>
        <li><strong>Google Docs</strong>: Import Google Documents directly as sources</li>
      </ul>
      ${o(800,400,"Notebook Selection Dialog")}
      
      <h2>Import Limits</h2>
      <p>Import limits depend on your subscription tier:</p>
      <ul>
        <li><strong>Basic</strong>: 15 imports per month (free)</li>
        <li><strong>Lite</strong>: 60 imports per month ($3.99/month)</li>
        <li><strong>Pro</strong>: Unlimited imports</li>
      </ul>
      <p><strong>Note</strong>: Import limits reset monthly for Basic and Lite tiers. Each import from any platform (ChatGPT, Gemini, Claude, Perplexity, X/Twitter, Reddit, LinkedIn, or Google Docs) costs 10 credits from your account balance and counts against your monthly import limit.</p>
    `},"export-chat":{title:"Export Chat Conversations",content:`
      <h1>Export Chat Conversations</h1>
      <p>Export or copy your NotebookLM chat conversations to save, share, or reference later. Export full conversations or create curated briefings with selected messages.</p>
      <p>If you haven't installed the extension in your browser, please <a href="#" data-page="installation">install it first</a>.</p>
      
      <h2>How it works</h2>
      <ol>
        <li>Navigate to your NotebookLM notebook chat</li>
        <li>Use the "Copy" button to copy the entire conversation to clipboard (free feature)</li>
        <li>Use the "Export" button to export the conversation in various formats</li>
        <li>In the export dropdown, toggle "Include user messages" on/off to control what's exported</li>
        <li>Select specific messages using checkboxes for curated export</li>
        <li>Choose your preferred format (Markdown, Text, PDF, or JSON)</li>
      </ol>
      ${o(800,400,"Chat Export Buttons")}
      
      <h2>Features</h2>
      <ul>
        <li><strong>Full Conversation Export</strong>: Export entire chat conversations</li>
        <li><strong>Curated Briefings</strong>: Select specific messages to export (checkbox selection)</li>
        <li><strong>Copy to Clipboard</strong>: Quick copy without using export credits (free feature)</li>
        <li><strong>Multiple Formats</strong>: Export as Markdown, Text, PDF, or JSON</li>
        <li><strong>Message Selection</strong>: Checkboxes appear on each message for easy selection</li>
        <li><strong>User Messages Toggle</strong>: Control whether user messages are included in exports (default: ON)</li>
      </ul>
      ${o(800,400,"Message Selection with Checkboxes")}
      
      <h2>Export Formats</h2>
      <ul>
        <li><strong>Markdown (.md)</strong>: Intelligently formatted markdown with proper hierarchy (headings, lists, paragraphs)</li>
        <li><strong>Text (.txt)</strong>: Plain text format</li>
        <li><strong>PDF (.pdf)</strong>: Professional PDF documents with formatted content</li>
        <li><strong>JSON (.json)</strong>: Structured data format</li>
      </ul>
    `},"source-views":{title:"Source Views",content:`
      <h1>Source Views</h1>
      <p>View and filter notebook sources with custom views. Save your favorite source filters for quick access.</p>
      <p>If you haven't installed the extension in your browser, please <a href="#" data-page="installation">install it first</a>.</p>
      
      <h2>How it works</h2>
      <ol>
        <li>Navigate to your NotebookLM notebook</li>
        <li>Access source view features (all tiers)</li>
        <li>Use the search bar to find sources by name</li>
        <li>Apply filters to show specific source types (PDFs, GDocs, Web, Text, YouTube)</li>
        <li>Save views for quick access</li>
        <li>Apply saved views to filter sources</li>
      </ol>
      ${o(800,400,"Source Views Interface")}
      
      <h2>Available Filters</h2>
      <p>Source Views includes the following filter options:</p>
      <ul>
        <li><strong>All</strong>: Show all sources (default)</li>
        <li><strong>PDFs</strong>: Filter to show only PDF documents</li>
        <li><strong>GDocs</strong>: Filter to show only Google Docs</li>
        <li><strong>Web</strong>: Filter to show only web sources</li>
        <li><strong>Text</strong>: Filter to show text-based sources (descriptions, notes, text files)</li>
        <li><strong>YouTube</strong>: Filter to show video sources (YouTube videos, video content)</li>
      </ul>
      <p>You can combine filters with the search bar to quickly find specific sources in your notebook.</p>
      ${o(800,400,"Source View Filters")}
      
      <h2>Source View Limits</h2>
      <p>Source view limits work on a slot-based system:</p>
      <ul>
        <li><strong>Basic</strong>: 5 slots available</li>
        <li><strong>Lite</strong>: 30 slots available</li>
        <li><strong>Pro</strong>: Unlimited slots</li>
      </ul>
      <p><strong>Note</strong>: You have a fixed number of slots. When you delete a source view, that slot becomes available again. Views are synced across all your devices via Firestore.</p>
    `},"sync-google-docs":{title:"Sync All Google Docs",content:`
      <h1>Sync All Google Docs (Pro-Only)</h1>
      <p>Automatically sync all Google Doc sources in a notebook with a single click. This Pro-only feature keeps your Google Doc sources up-to-date in NotebookLM.</p>
      <p>If you haven't installed the extension in your browser, please <a href="#" data-page="installation">install it first</a>.</p>
      
      <h2>How it works</h2>
      <ol>
        <li>Navigate to your NotebookLM notebook</li>
        <li>Look for the sync icon (cloud_download) in the source panel header</li>
        <li>Click the sync button to sync all Google Doc sources</li>
        <li>The page will automatically reload after syncing completes</li>
        <li>All Google Doc sources will be updated with the latest content</li>
      </ol>
      ${o(800,400,"Sync Google Docs Button")}
      
      <h2>Features</h2>
      <ul>
        <li><strong>One-Click Sync</strong>: Sync all Google Doc sources at once</li>
        <li><strong>Visual Feedback</strong>: Button shows sync animation and success indicator</li>
        <li><strong>Automatic Reload</strong>: Page reloads after sync completes to show updates</li>
        <li><strong>Error Handling</strong>: Clear error messages if sync fails</li>
        <li><strong>Pro-Only</strong>: Available exclusively to Pro tier subscribers</li>
      </ul>
      
      <h2>Availability</h2>
      <ul>
        <li><strong>Basic</strong>: Feature not available (locked)</li>
        <li><strong>Lite</strong>: Feature not available (locked)</li>
        <li><strong>Pro</strong>: Unlimited syncs (feature fully available)</li>
      </ul>
      <p><strong>Note</strong>: This feature syncs Google Doc sources to NotebookLM, ensuring the AI has access to the latest document content. Basic and Lite users will see a locked button that prompts them to upgrade.</p>
    `},"smart-search":{title:"Smart Search Notebooks",content:`
      <h1>Smart Search Notebooks</h1>
      <p>Quickly find notebooks on your dashboard using the built-in search functionality. Filter notebooks by name in real-time as you type.</p>
      <p>If you haven't installed the extension in your browser, please <a href="#" data-page="installation">install it first</a>.</p>
      
      <h2>How it works</h2>
      <ol>
        <li>Navigate to the NotebookLM dashboard (home page)</li>
        <li>A search bar appears in the page header</li>
        <li>Type to filter notebooks by name</li>
        <li>Notebooks matching your search will be displayed</li>
        <li>Clear the search to show all notebooks again</li>
      </ol>
      ${o(800,400,"Search Bar on Dashboard")}
      
      <h2>Features</h2>
      <ul>
        <li><strong>Real-time filtering</strong>: Results update as you type</li>
        <li><strong>Multi-keyword search</strong>: Search with multiple words (space-separated)</li>
        <li><strong>Theme-aware</strong>: Automatically adapts to dark/light mode</li>
        <li><strong>Dashboard only</strong>: Search bar only appears on the dashboard</li>
        <li><strong>Auto-cleanup</strong>: Search bar is removed when navigating away from dashboard</li>
      </ul>
      ${o(800,400,"Filtered Notebook Results")}
      
      <h2>Search Tips</h2>
      <ul>
        <li>Use multiple keywords to narrow results (e.g., "API design security")</li>
        <li>Search is case-insensitive</li>
        <li>Partial matches work (e.g., "api" matches "API Design")</li>
        <li>Clear the search field to show all notebooks</li>
      </ul>
      <p><strong>Note</strong>: This feature is available to all users (no subscription required).</p>
    `},"highlight-snipe":{title:"Highlight & Snipe",content:`
      <h1>Highlight & Snipe</h1>
      <p>Save highlighted text from any webpage directly to NotebookLM with a simple right-click. Perfect for quickly capturing quotes, research snippets, or important information while browsing.</p>
      <p>If you haven't installed the extension in your browser, please <a href="#" data-page="installation">install it first</a>.</p>
      
      <h2>How it works</h2>
      <ol>
        <li>Select any text on any webpage</li>
        <li>Right-click to open the context menu</li>
        <li>Click "Send highlight to NotebookLM"</li>
        <li>A popup will open showing your notebooks</li>
        <li>Select an existing notebook or create a new one</li>
        <li>The highlighted text will be saved as a source in your notebook</li>
      </ol>
      ${o(800,400,"Context Menu with Highlight Option")}
      
      <h2>Features</h2>
      <ul>
        <li><strong>Universal access</strong>: Works on any webpage, not just NotebookLM</li>
        <li><strong>Quick capture</strong>: Right-click context menu for instant access</li>
        <li><strong>Smart organization</strong>: Automatically creates "[SNIPPETS]" notebooks if needed</li>
        <li><strong>Source metadata</strong>: Includes source URL and date when snippet was captured</li>
        <li><strong>Notebook selection</strong>: Choose which notebook to save to, or create new</li>
        <li><strong>Search notebooks</strong>: Search bar in popup to quickly find the right notebook</li>
      </ul>
      ${o(800,400,"Notebook Selection Popup")}
      
      <h2>What gets saved?</h2>
      <p>When you save a highlight, Kortex creates a source in your NotebookLM notebook containing:</p>
      <ul>
        <li><strong>Source title</strong>: First 8 words of the highlighted text</li>
        <li><strong>Source content</strong>:
          <ul>
            <li>Source URL (where the text came from)</li>
            <li>Date and time when snippet was captured</li>
            <li>The full highlighted text</li>
          </ul>
        </li>
      </ul>
      <p><strong>Note</strong>: This feature is available to all users (no subscription required). You must be signed in to use this feature.</p>
    `},"delete-sources":{title:"Delete Sources",content:`
      <h1>Delete Sources</h1>
      <p>Remove sources from your NotebookLM notebooks directly from the extension. Select and delete multiple sources at once with a simple interface.</p>
      <p>If you haven't installed the extension in your browser, please <a href="#" data-page="installation">install it first</a>.</p>
      
      <h2>How it works</h2>
      <ol>
        <li>Navigate to your NotebookLM notebook</li>
        <li>Look for the delete button (trash icon) in the source panel header</li>
        <li>Click the delete button to open the deletion popup</li>
        <li>Select which sources you want to delete using checkboxes</li>
        <li>Click "Delete" to confirm</li>
        <li>The page will automatically refresh after successful deletion</li>
      </ol>
      
      <h2>Features</h2>
      <ul>
        <li><strong>Bulk Deletion</strong>: Select and delete multiple sources at once</li>
        <li><strong>Source Preview</strong>: See source titles and types before deleting</li>
        <li><strong>Confirmation Dialog</strong>: Prevents accidental deletions</li>
        <li><strong>Auto-Refresh</strong>: Notebook page refreshes automatically after deletion</li>
        <li><strong>Search Support</strong>: Search for specific sources to delete</li>
      </ul>
      
      <h2>What gets deleted?</h2>
      <p>When you delete sources:</p>
      <ul>
        <li>Selected sources are permanently removed from your notebook</li>
        <li>This action cannot be undone</li>
        <li>The source content will no longer be available to the AI in that notebook</li>
      </ul>
      
      <h2>Tips</h2>
      <ul>
        <li>Use the search bar to quickly find sources you want to delete</li>
        <li>Select all sources at once using the "Select All" checkbox</li>
        <li>Be careful when deleting sources - this action is permanent</li>
        <li>The notebook will refresh automatically after deletion to show updated source list</li>
      </ul>
      <p><strong>Note</strong>: This feature is available to all users (no subscription required). You must be signed in to delete sources.</p>
    `},"understanding-limits":{title:"Understanding Feature Limits",content:`
      <h1>Understanding Feature Limits</h1>
      <p>Kortex uses a tiered subscription system with limits for different features to ensure fair usage.</p>
      
      <h2>How Limits Work</h2>
      <p>Kortex has three types of feature limits:</p>
      
      <h3>1. Export Limits (Monthly Reset)</h3>
      <ul>
        <li>Each export counts against your monthly limit and costs 10 credits</li>
        <li>Limits reset on the 1st of each month (for Basic and Lite tiers)</li>
        <li>Basic: 15 exports/month, Lite: 80 exports/month, Pro: Unlimited</li>
      </ul>
      
      <h3>2. Import Limits (Monthly Reset)</h3>
      <ul>
        <li>Each import (chat or Google Doc) counts against your monthly limit and costs 10 credits</li>
        <li>Limits reset on the 1st of each month (for Basic and Lite tiers)</li>
        <li>Basic: 15 imports/month, Lite: 60 imports/month, Pro: Unlimited</li>
      </ul>
      
      <h3>3. Credit System</h3>
      <ul>
        <li>New users start with 0 credits (must purchase credits to use features)</li>
        <li>Each export costs 10 credits</li>
        <li>Each import costs 10 credits</li>
        <li>Prepaid credits are used before regular credits</li>
      </ul>
      
      <h3>4. Prompt Holder Limits (Slot-Based)</h3>
      <ul>
        <li>You have a fixed number of slots for prompts</li>
        <li>When you delete a prompt, that slot becomes available again</li>
        <li>Basic: 5 slots, Lite: 30 slots, Pro: Unlimited</li>
      </ul>
      
      <h3>5. Source View Limits (Slot-Based)</h3>
      <ul>
        <li>You have a fixed number of slots for source views</li>
        <li>When you delete a source view, that slot becomes available again</li>
        <li>Basic: 5 slots, Lite: 30 slots, Pro: Unlimited</li>
      </ul>
      
      <h2>Checking Your Usage</h2>
      <p>1. Click the extension icon</p>
      <p>2. View your current usage in the popup</p>
      <p>3. See remaining exports for the current month</p>
      <p>4. See prompt and source view counts (if applicable)</p>
      ${o(800,300,"Usage Limits Display in Popup")}
      
      <h2>What Counts as an Export?</h2>
      <ul>
        <li>Exporting sources as PDF = 1 export</li>
        <li>Exporting sources as Markdown = 1 export</li>
        <li>Exporting sources as Text = 1 export</li>
        <li>Exporting sources as ZIP = 1 export (regardless of number of sources included)</li>
        <li>Exporting notes/artifacts = 1 export</li>
        <li>Exporting chat conversations = 1 export</li>
      </ul>
    `},troubleshooting:{title:"Troubleshooting",content:`
      <h1>Troubleshooting</h1>
      <p>Common issues and solutions to help you resolve problems quickly.</p>
      
      <h2>Common Issues</h2>
      
      <h3>Export Not Working</h3>
      <p><strong>Issue</strong>: Export button doesn't work or export fails</p>
      <p><strong>Solutions</strong>:</p>
      <ol>
        <li>Make sure you're signed in</li>
        <li>Check if you've reached your export limit</li>
        <li>Refresh the NotebookLM page</li>
        <li>Try signing out and signing back in</li>
        <li>Check browser console for error messages</li>
      </ol>
      
      <h3>Authentication Issues</h3>
      <p><strong>Issue</strong>: Can't sign in or sign in fails</p>
      <p><strong>Solutions</strong>:</p>
      <ol>
        <li>Check your internet connection</li>
        <li>Clear browser cache and cookies</li>
        <li>Disable other extensions temporarily</li>
        <li>Try in an incognito window</li>
        <li>Check if third-party cookies are blocked</li>
      </ol>
      
      <h3>Export Limit Reached</h3>
      <p><strong>Issue</strong>: "Export limit reached" message</p>
      <p><strong>Solutions</strong>:</p>
      <ol>
        <li>Upgrade to a higher tier for more exports</li>
        <li>Wait until next month for limit reset (Basic/Lite tiers)</li>
        <li>Purchase prepaid credits to continue using features</li>
        <li>Contact support if you believe there's an error</li>
      </ol>
      
      <h3>Email Verification Issues</h3>
      <p><strong>Issue</strong>: Can't sign in after creating account with email/password</p>
      <p><strong>Solutions</strong>:</p>
      <ol>
        <li>Check your email inbox for the verification email</li>
        <li><strong>Check your spam/junk folder</strong> - verification emails sometimes go there</li>
        <li>Click the verification link in the email</li>
        <li>Verification links expire after 3 days - request a new one if needed</li>
        <li>Make sure you're using the same email address you signed up with</li>
        <li>Try signing in again after verifying your email</li>
      </ol>
      
      <h3>Download Not Starting</h3>
      <p><strong>Issue</strong>: Export completes but file doesn't download</p>
      <p><strong>Solutions</strong>:</p>
      <ol>
        <li>Check your browser's download settings</li>
        <li>Check if downloads are blocked</li>
        <li>Look in your Downloads folder</li>
        <li>Check browser console for errors</li>
        <li>Try a different export format</li>
      </ol>
    `}};function s(e){const t=document.getElementById("content-area"),r=a[e]||a.index;t.innerHTML=`
    <div class="content-page">
      ${r.content}
    </div>
  `,document.querySelectorAll(".nav-link").forEach(i=>{i.classList.remove("active"),i.getAttribute("data-page")===e&&i.classList.add("active")}),document.title=`${r.title} - Kortex Documentation`,t.scrollTop=0,t.querySelectorAll("a[data-page]").forEach(i=>{i.addEventListener("click",c=>{c.preventDefault();const p=i.getAttribute("data-page");window.location.hash=p,s(p)})})}document.addEventListener("DOMContentLoaded",()=>{n();const e=window.location.hash.slice(1)||"index";s(e),document.querySelectorAll(".nav-link").forEach(t=>{t.addEventListener("click",r=>{r.preventDefault();const i=t.getAttribute("data-page");window.location.hash=i,s(i)})}),window.addEventListener("hashchange",()=>{const t=window.location.hash.slice(1)||"index";s(t)})});document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n();typeof l<"u"&&l.exports&&(l.exports={loadPage:s,docsContent:a})});export default f();
