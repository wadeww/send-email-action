# Send Email action

This action sends an email to recipient list when a workflow finishes

## Inputs

### `server_address`

**Required** - URL of SMTP server

### `username`

**Required** - Auth username for SMTP server.

### `password`

**Required** - Auth password for SMTP server.

### `from`

**Required** - Sender email address

### `to`

**Required** - Comma-separeated recipient list of addresses

### `subject`

**Required** - Email subject line

### `body`

**Required** - Email body text


## Example usage

```yaml
- name: Send some mail
  uses: wadeww/send-email-action@master
  with:
    server_address: smtp.gmail.com
    port: 465
    username: ${{secrets.MAIL_USERNAME}}
    password: ${{secrets.MAIL_PASSWORD}}
    subject: Workflow finished
    body: Job completed successfully
    to: john@denver.com, elton@john.com
    from: me@me.com
```
