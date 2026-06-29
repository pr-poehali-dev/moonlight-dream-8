import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки на ГНБ на email buh290089@yandex.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    description = body.get('description', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    smtp_password = os.environ['SMTP_PASSWORD']
    from_email = 'buh290089@yandex.ru'
    to_email = 'buh290089@yandex.ru'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка на ГНБ от {name}'
    msg['From'] = from_email
    msg['To'] = to_email

    html = f"""
    <h2>Новая заявка на горизонтально-направленное бурение</h2>
    <p><strong>Имя:</strong> {name}</p>
    <p><strong>Телефон:</strong> {phone}</p>
    <p><strong>Описание объекта:</strong> {description if description else 'Не указано'}</p>
    """

    msg.attach(MIMEText(html, 'html'))

    try:
        with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
            server.login(from_email, smtp_password)
            server.sendmail(from_email, to_email, msg.as_string())
    except smtplib.SMTPAuthenticationError:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Ошибка авторизации почты. Проверьте пароль приложения.'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Не удалось отправить письмо: {str(e)}'})
        }

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }