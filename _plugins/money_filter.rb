module Jekyll
  module MoneyFilter
    def money(value, currency = "PLN", format = "%0.0f", decimal_separator = ".", thousands_separator = " ")
      formatted_value = format(format, value)
      formatted_value.gsub!(".", decimal_separator)
      formatted_value.gsub!(/(\d)(?=(\d\d\d)+(?!\d))/, "\\1#{thousands_separator}")
      currency == 'PLN' ? "#{formatted_value} zł" : "#{currency}#{formatted_value}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::MoneyFilter)