# Generated by Django 2.1.2 on 2018-10-26 16:02

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0008_submitter_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='submitter',
            name='phone_number',
            field=models.CharField(blank=True, default='0000000000', max_length=17, validators=[django.core.validators.RegexValidator(message='Format: 9999999999', regex='^\\+?1?\\d{9,15}$')]),
        ),
    ]
