import Select, { components } from 'react-select';

const VALUE_PREFIX = 'To ';
const VALUE_SUFFIX = '$';

export const SelectPrice = ({ formattedPrices, handleSelectPriceChange }) => {
  return (
    <Select
      onChange={handleSelectPriceChange}
      options={formattedPrices}
      placeholder={`  `}
      components={{
        SingleValue: ({ children, ...props }) => {
          return (
            <components.SingleValue {...props}>
              {VALUE_PREFIX + children + VALUE_SUFFIX}
            </components.SingleValue>
          );
        },
        Placeholder: ({ children, ...props }) => {
          return (
            <components.Placeholder {...props}>
              {VALUE_PREFIX + children + VALUE_SUFFIX}
            </components.Placeholder>
          );
        },
        IndicatorSeparator: () => null,
      }}
      styles={{
        control: (base, state) => ({
          ...base,
          backgroundColor: '#F7F7FB',
          borderRadius: '14px',
          width: '155px',
          boxShadow: 'none',
          padding: '8px 10px',
          border: 'none',
          cursor: 'text',
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: '#fff',
          color: '#F7F7FB',
          border: '1px solid rgba(18, 20, 23, 0.05)',
          boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
        }),

        option: (base) => ({
          ...base,
          color: 'rgba(18, 20, 23, 0.20)',
        }),

        menuList: (base) => ({
          ...base,
          backgroundColor: '#fff',
          borderRadius: '14px',
          padding: '14px 8px 14px 18px',
          gap: '8px',
          maxHeight: '274px',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(18, 20, 23, 0.05);',
            borderRadius: '10px',
            marginRight: '8px',
          },
          color: '#fff',
        }),

        placeholder: (base) => ({
          ...base,
          color: '#121417',
          fontSize: '18px',
          fontWeight: '500',
        }),
        dropdownIndicator: (base, state) => ({
          ...base,
          color: state.isFocused ? '#121417' : '#121417',
          transition: 'color 0.25s ease-in-out',
          transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
          cursor: 'pointer',
        }),
        singleValue: (base) => ({
          ...base,
          color: '#121417',
          fontSize: '18px',
          fontWeight: '500',
        }),
        indicatorSeparator: (base) => ({
          ...base,
          display: 'none',
        }),
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: '14px',
        colors: {
          ...theme.colors,
          primary25: '#F7F7FB',
        },
      })}
    />
  );
};
